const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const testRoutes = require("./routes/testRoutes")
const testword = require('./test/test')

const PORT = 5000

dotenv.config()

const app = express()
app.use(cors())

app.use('/api/test', testRoutes)


app.get("/home", (req, res) => {
  res.status(200).json("Welcome to app home")
})
app.get("/", (req, res) => {
  res.status(200).json(testword)
})

app.listen(PORT, () => {
  console.log('Server running on port 5000')
})

module.exports = app