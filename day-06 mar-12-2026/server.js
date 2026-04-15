const app = require('./app');

const commoParam = `/api/v${process.env.VERSION}`;

const userRoute = require('./route/userRoute');
app.use(`${commoParam}/user`, userRoute);

const authRoute = require('./route/authRoute');
app.use(`${commoParam}/auth`, authRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})