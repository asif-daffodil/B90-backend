const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// CORS Configuration
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static public folder
app.use('/public', express.static('public'));

// api routes
app.use(`/api/${process.env.VERSION}`, require("./routes/api"));

// not found route
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
