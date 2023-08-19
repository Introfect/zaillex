const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Username Missing"],
    },
    userEmail: {
      type: String,
      required: [true, "Email Missing"],
      index: { unique: true, dropDups: true },
    },
    password: {
      type: String,
      required: [true, "Password Missing"],
      minlength: 6,
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password Missing"],
      minlength: 6,
    },
  });
  
  const User = mongoose.model("users", userSchema);
  
  module.exports = User;
  
