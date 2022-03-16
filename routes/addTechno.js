import express from "express";
import User from "../db/models/users.js";

const AddTechno = express.Router();

AddTechno.post("/", async (req, res) => {
  const { email, technologies } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({ message: "Email or password does not match!" });
    } else {
      let test = user.technologies.findIndex((item) => item === technologies);
      if (test === -1) {
        user.technologies.push(technologies);
        user.save();
        res.json({ user: user, message: "Successfully uploaded" });
      } else {
        res.json({
          message: "You already have this technology added",
        });
      }
    }
  });
});

export default AddTechno;
