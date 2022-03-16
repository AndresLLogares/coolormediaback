import express from 'express';
import Friends from '../db/models/friends.js';

const HandleMessage = express.Router();

HandleMessage.post('/', async (req, res) => {

    const { uuid, date, message, from } = req.body;

    await Friends.find({ uuid: uuid })
        .then(friend => {
            if (!friend) {
                return res.json({ message: "UUID does not match!" });
            }
            console.log(friend);
            friend[0].messages.push({ date: date, from: from, message: message });
            friend[1].messages.push({ date: date, from: from, message: message });
            friend[0].save();
            friend[1].save();
            res.json({ message: 'Message sended' })
        })

})

export default HandleMessage;