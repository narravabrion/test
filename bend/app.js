const express = require("express")
const cors = require("cors")
require("dotenv").config()
const studentRoutes = require('./routes/student.routes')
const subjectRoutes = require('./controllers/subject.controllers')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/student',studentRoutes)
app.use('/api/v1/subject',subjectRoutes)

app.listen(process.env.APP_PORT, () => {
	console.log(`listening to port: ${process.env.APP_PORT}`)
})
