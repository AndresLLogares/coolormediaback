import express from 'express';
import Friends from '../db/models/friends.js';

const HandleRequest = express.Router();

HandleRequest.post('/', async (req, res) => {

    const { uuid, fullname, profilePhoto, useruuid } = req.body;

    await Friends.findOne({ uuid: uuid })
        .then(friend => {
            if (!friend) {
                return res.json({ message: "UUID does not match!" });
            }
            friend.request = false;
            const newFriend = new Friends({
                uuid: friend.uuid,
                user: friend.emailfriend,
                emailfriend: friend.user,
                namefriend: fullname,
                image: profilePhoto,
                useruuid:friend.frienduuid,
                frienduuid: useruuid,
                request: false
            })
            newFriend.save();
            friend.save();
            return res.json({ message: "Friend accepted" })
        })
})

export default HandleRequest;