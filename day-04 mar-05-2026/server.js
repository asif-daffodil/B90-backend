const app = require("./app");

const userRoute = require("./routes/user");
app.use("/user", userRoute);

const createPasswordRoute = require("./routes/createPassword");
app.use("/password", createPasswordRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})