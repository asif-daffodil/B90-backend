const app = require('./app');
const authRoute = require('./route/authRoute');
const taskRoute = require('./route/taskRoute');

const PORT = process.env.PORT || 5000;

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/task', taskRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});