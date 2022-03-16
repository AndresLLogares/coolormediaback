import express from "express";
import User from "../db/models/users.js";

const DeleteOther = express.Router();

DeleteOther.post("/", async (req, res) => {
  const { email, id } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({ message: "Email or password does not match!" });
    } else {
      user.more_info = user.more_info.filter((item) => item.Id !== id);
      user.save();
      res.json({
        user: user,
        message: "Information deleted",
      });
    }
  });
});

export default DeleteOther;
