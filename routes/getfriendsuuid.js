import express from 'express';
import Friends from '../db/models/friends.js';

const GetFriendsUUID = express.Router();

GetFriendsUUID.post('/', async (req, res) => {

    const {uuid} = req.body;

    await Friends.find({ useruuid: uuid })
        .then(friend => {
            if (!friend) return res.json({message: 'You do not have contacts'})
            else {
                res.json({friend})
            }
        })
})

export default GetFriendsUUID;