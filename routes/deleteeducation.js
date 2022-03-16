import express from 'express';
import User from '../db/models/users.js';

const DeleteEducation = express.Router();

DeleteEducation.post('/', async (req, res) => {


    const { email, id } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email or password does not match!" });
            }
            else {
                user.education = user.education.filter(item => item.Id !== id)
                user.save();
                res.json({ message: 'Information deleted' })
            }
        })
});

export default DeleteEducation;