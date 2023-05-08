const jwt = require("jsonwebtoken");
const users = require("../model/model")

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, 'hello samir');
    if (!decode) {
      res.status(400).send("you are not auth");
    }
    const user = await users.findById(decode.id);
    req.user = user;

    next()
  } catch (error) {
    console.log(error);
  }
};