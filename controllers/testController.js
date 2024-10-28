exports.welcomeText = async (req, res) => {
  res.status(200).json('welcome to test api aaaaa')
}

exports.homeText = async (req, res) => {
  res.status(200).json('welcome to home api bbbbb')
}

exports.loginText = async (req, res) => {
  res.status(200).json('welcome to login api cccc')
}

