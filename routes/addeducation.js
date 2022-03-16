import express from 'express';
import User from '../db/models/users.js';

const AddEducation = express.Router();

AddEducation.post('/', async (req, res) => {

    const { email, institute, degree, startdate, enddate, description, id } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email or password does not match!" });
            }
            else {

                user.education.push({ institute: institute, degree: degree, startdate: startdate, enddate: enddate, description: description, Id: id })
                user.save();
                res.json({ message: 'Successfully uploaded' })
            }
        })
});

export default AddEducation;