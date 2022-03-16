import express from 'express';
import bcrypt from 'bcrypt';
import User from '../db/models/users.js';

const Redirect = express.Router();


Redirect.get('/', async (req, res) => {

    let hash = req.query.Link;

    let user = req.query.User;

    await User.findOne({ email: user })
        .then(user => {
            if (!user) {
                return res.redirect('https://coolormedia.netlify.app/');
            }
            else {
                if (hash === user.hash) {
                    return res.redirect('https://coolormedia.netlify.app/');
                }
                else {
                    res.redirect('https://coolormedia.netlify.app/');
                }
            }
        })
})

export default Redirect;