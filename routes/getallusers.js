import express from 'express';
import User from '../db/models/users.js';

const GetUsers = express.Router();

GetUsers.get('/', async (req, res) => {

    await User.find({})
        .then((users) => {
            res.json({ users })
        })
        .catch((error) => console.log(error))
})

export default GetUsers;