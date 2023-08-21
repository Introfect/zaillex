const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../../utils/jwtUtils");

const register = async (req, res) => {
  const userEmail = await User.findOne({ userEmail: req.body.userEmail });
  
  if (userEmail) {
    res.status(409).json("User already exists!");
    return;
  }
  const user = new User({
    name: req.body.name,
    userEmail: req.body.userEmail,
    password: bcrypt.hashSync(req.body.password, 8),
    confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
    token: createToken(req.body),
  });
  try {
    if (req.body.userEmail) {
      if (req.body.password === req.body.confirmPassword) {
        user.save();
      } else {
        res.status(402).json("Password does not match");
        return;
      }
    }
  } catch (error) {
    res.status(401).json("some error occured");
    return;
  }
  res.status(200).json({
    user:user,
    token:createToken(req.body),
  });
};

module.exports = register;