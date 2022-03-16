import express from "express";
import User from "../db/models/users.js";

const UploadPhotos = express.Router();

UploadPhotos.post("/back", async (req, res) => {
  const { email, photoUrl } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({ message: "Email or password does not match!" });
    } else {
      user.photo_back = photoUrl;
      user.save();
      res.json({
        user: user,
        message: "Successfully uploaded",
      });
    }
  });
});

UploadPhotos.post("/profile", async (req, res) => {
  const { email, photoUrl } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({ message: "Email or password does not match!" });
    } else {
      user.photo_profile = photoUrl;
      user.save();
      res.json({
        user: user,
        message: "Successfully uploaded",
      });
    }
  });
});

export default UploadPhotos;
