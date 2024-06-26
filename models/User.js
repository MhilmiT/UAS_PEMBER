const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    type: String,
    default:
      "https://th.bing.com/th/id/OIP.bb_XdMh4HJXUE8qW_kDSZQHaGM?rs=1&pid=ImgDetMain",
  },
});

module.exports = mongoose.model("User", UserSchema);
