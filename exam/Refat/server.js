const app = require('./app')

const mainRouter = require('./routers/userRoute')
app.use('/user', mainRouter)

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})