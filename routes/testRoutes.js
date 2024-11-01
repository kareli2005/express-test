const express = require("express")
const router = express.Router()
const testController = require("../controllers/testController")

router.get('/', testController.welcomeText)
router.get('/home', testController.homeText)
router.get('/login', testController.loginText)

module.exports = router