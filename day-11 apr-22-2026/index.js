const expres = require("express");
const app = expres();
const multer = require("multer");

app.get("/", (req, res) => {
  res.send("Hello World");
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + '.' + file.mimetype.split("/")[1]);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif" || file.mimetype === "image/jpg" || file.mimetype === "image/webp" || file.mimetype === "image/avif") {
        cb(null, true);
    } else {
        cb(new Error("Only jpeg, png, gif, jpg, webp, avif files are allowed"), false);
    }
};

const upload = multer(
    { 
        storage: storage,
        limits: { fileSize: 1024 * 1024 * 5 },
        fileFilter: fileFilter 
    }
);

const requireFile = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    next();
};

app.post("/upload", upload.single("file"), requireFile, (req, res) => {
    res.send("File uploaded successfully");
});



app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});