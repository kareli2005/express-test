const express = require("express")
const app = express()
const PORT = 4000

app.get("/home", (req, res) => {
  res.status(200).json("Welcome to app home")
})
app.get("/", (req, res) => {
  res.status(200).json("Welcome to app")
})

app.listen(PORT, () => {
  console.log('Server running on port 5000')
})

module.exports = app