const User = require("../models/User");

module.exports = {
  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.user.id);

      res
        .status(200)
        .json({ status: true, message: "User succesfully delete" });
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (req, res, next) => {
    const user_id = req.user.id;

    try {
      const user = User.findById(
        { user_id },
        { password: 0, __v: 0, createdAt: 0, updateAt: 0 }
      );

      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "User does not exist" });
      }

      res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },
};
