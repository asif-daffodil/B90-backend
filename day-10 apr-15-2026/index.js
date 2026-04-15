const app = require('./App');
require('dotenv').config();

const port = process.env.PORT;

const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})