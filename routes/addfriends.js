import express from 'express';
import Friends from '../db/models/friends.js';

const AddFriend = express.Router();

AddFriend.post('/', async (req, res) => {

    const { uuid, user, emailfriend, namefriend, imagefriend, useruuid, frienduuid } = req.body;

    await Friends.findOne({ uuid: uuid })
        .then(friend => {
            if (friend) {
                return res.json({ message: "This person is your contact" });
            }
            const newFriend = new Friends({
                uuid: uuid,
                user: user,
                emailfriend: emailfriend,
                namefriend: namefriend,
                image: imagefriend,
                useruuid: useruuid,
                frienduuid: frienduuid,
                request: true
            })
            newFriend.save()
                .then(() => { res.json({ message: 'Request sent' }) })
                .catch((error) => console.log(error))
        })
})

export default AddFriend;