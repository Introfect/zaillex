const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../../utils/jwtUtils");

const login = async(req, res) => {
    const user = await User.findOne({ userEmail: req.body.userEmail });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({
          token: createToken(user),
          user:user
        });
        return;
      }
    }
    res.status(404).json({ message: "Invalid Email or password" });
};

module.exports = login;