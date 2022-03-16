import express from 'express';
import User from '../db/models/users.js';
import bcrypt from 'bcrypt';
const SignUp = express.Router();

SignUp.post('/', async (req, res) => {

    const { name, lastname, email, password, age, dateOfBirthday, uuid } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.json({ 
                    success: false,
                    message: "Email already exists" });
            } else {
                const newUser = new User({
                    first_name: name,
                    last_name: lastname,
                    full_name: name + " " + lastname,
                    email: email,
                    password: password,
                    age: age,
                    date_Of_Birthday: dateOfBirthday,
                    uuid: uuid
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json({ 
                                success: true,
                                message: 'Thanks for registering' }))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

export default SignUp;
