import express from "express";
import User from "../db/models/users.js";

const AddOthers = express.Router();

AddOthers.post("/", async (req, res) => {
  const { email, title, image, url, id } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({
        message: "Email or password does not match!",
      });
    } else {
      user.more_info.push({ title: title, image: image, url: url, Id: id });
      user.save();
      res.json({
        user: user,
        message: "Successfully uploaded",
      });
    }
  });
});

export default AddOthers;
