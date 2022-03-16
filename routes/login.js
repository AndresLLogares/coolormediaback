import express from 'express';
import User from '../db/models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { SECRET } = process.env;
const secret = SECRET;
const Login = express.Router();

Login.post('/', async (req, res) => {
    const { email, password } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email or password does not match!" });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        firstname: user.first_name,
                        lastname: user.last_name
                    };
                    jwt.sign(
                        payload,
                        secret,
                        {
                            expiresIn: 31556926
                        },
                        (err, token) => {
                            res.json({
                                message: "Welcome Back",
                                token: token,
                                firstname: user.first_name,
                                lastname: user.last_name,
                                email: user.email
                            });
                        }
                    );
                }
                else {
                    return res.json({ message: "Password incorrect" });
                }
            });
        });
});

export default Login;

