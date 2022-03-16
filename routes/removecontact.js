import express from 'express';
import Friends from '../db/models/friends.js';

const RemoveFriend = express.Router();

RemoveFriend.post('/', async (req, res) => {

    const { uuid } = req.body;

    await Friends.remove({ uuid: uuid })
    res.json({ message: 'Request deleted' })

})

export default RemoveFriend;