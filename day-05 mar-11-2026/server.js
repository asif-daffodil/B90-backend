const app = require('./app');

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});