import express from 'express';
import User from '../db/models/users.js';

const AddCountry = express.Router();

AddCountry.post('/', async (req, res) => {

    const { email, region, country, flag } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email or password does not match!" });
            }
            else {
                user.country = country;
                user.flag = flag;
                user.region = region;
                user.save();
                res.json({ message: 'Successfully uploaded' })
            }
        })
});

export default AddCountry;