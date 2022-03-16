import express from 'express';
import User from '../db/models/users.js';

const GetUser = express.Router();


GetUser.post('/', async (req, res) => {
    const { email } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email or password does not match!" });
            }
            else {
                return res.json({
                    name: user.first_name,
                    lastname: user.last_name,
                    age: user.age,
                    friends: user.friends,
                    technologies: user.technologies,
                    dateOfBirthday: user.date_Of_Birthday,
                    photos: user.photos,
                    comments: user.comments,
                    country: user.country,
                    email: user.email,
                    city: user.city,
                    region: user.region,
                    backPhoto: user.photo_back,
                    profilePhoto: user.photo_profile,
                    flag: user.flag,
                    others: user.more_info,
                    education: user.education,
                    jobs: user.jobs,
                    fullname: user.full_name,
                    UUID: user.uuid
                })
            }
        });
});

export default GetUser;