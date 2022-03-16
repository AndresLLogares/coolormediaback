import express from 'express';
import Friends from '../db/models/friends.js';

const GetFriends = express.Router();

GetFriends.post('/', async (req, res) => {

    const {user} = req.body;

    await Friends.find({ user: user })
        .then(friend => {
            if (!friend) return res.json({message: 'You do not have contacts'})
            else {
                res.json({friend})
            }
        })
})

export default GetFriends;