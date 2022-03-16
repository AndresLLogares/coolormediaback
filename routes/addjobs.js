import express from "express";
import User from "../db/models/users.js";

const AddJobs = express.Router();

AddJobs.post("/", async (req, res) => {
  const {
    companyname,
    email,
    jobposition,
    startdate,
    enddate,
    description,
    id,
  } = req.body;

  await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json({ message: "Email or password does not match!" });
    } else {
      user.jobs.push({
        companyname: companyname,
        jobposition: jobposition,
        startdate: startdate,
        enddate: enddate,
        description: description,
        Id: id,
      });
      user.save();
      res.json({ message: "Successfully uploaded" });
    }
  });
});

export default AddJobs;
