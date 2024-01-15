require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require("path")
const app = express();
const authRoute = require('./router/auth-router')
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./router/contact-router')
const courseRoute = require('./router/course-router')
const enrollmentRoute = require('./router/enrollment-router')
const quizRoute = require('./router/quiz-router')
const examRoute = require('./router/exam-router')

//handling cors policy
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authRoute)
app.use('/api/form', contactRoute)
app.use('/api/data', courseRoute)
app.use('/api/data', enrollmentRoute)
app.use('/api/data', quizRoute)
app.use('/api/data', examRoute)

app.use(errorMiddleware);

app.get("/", (req,res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")))
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

const PORT = 5000;

connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`)
    })
})
