import express from 'express';
import Post from '../db/models/post.js';
import User from '../db/models/users.js';

const HandleLike = express.Router();

HandleLike.post('/', async (req, res) => {

    const { email, id, name } = req.body;

    let responseMessage = '';

    await Post.findOne({ Id: id })
        .then(postsOnly => {
            if (!postsOnly) {
                return res.json({ message: "Email does not match!" });
            }
            else if (postsOnly.likes.findIndex(item => item.author === email) === -1) {
                postsOnly.likes.push({ author: email, name: name });
                responseMessage = 'Added to publications you like';
                postsOnly.save();
                return res.json({ message: responseMessage })
            }
            else {
                postsOnly.likes = postsOnly.likes.filter(item => item.author !== email)
                responseMessage = 'Removed from the publications you like';
                postsOnly.save();
                return res.json({ message: responseMessage })
            }
        })
})

export default HandleLike;