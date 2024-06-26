const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ status: false, message: "Email already exists" });
      }

      const newUser = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(password, process.env.SECRET).toString(),
      });

      await newUser.save();
      res
        .status(201)
        .json({ status: true, message: "User Successfully Created" });
    } catch (error) {
      return next(error);
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "User not found" });
      }

      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET
      );
      const decryptedPasswordString = decryptedPassword.toString(
        CryptoJS.enc.Utf8
      );

      if (decryptedPasswordString !== req.body.password) {
        return res
          .status(401)
          .json({ status: false, message: "Wrong Password" });
      }

      const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "21d",
      });

      res.status(200).json({ status: true, id: user._id, token: userToken });
    } catch (error) {
      return next(error);
    }
  },
};
