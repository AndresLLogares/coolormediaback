import express from 'express';
import Post from '../db/models/post.js';
import User from '../db/models/users.js';

const AddCommentoPost = express.Router();

AddCommentoPost.post('/', async (req, res) => {

    const { email, id, comment, name, date } = req.body;

    await User.findOneAndUpdate({ email: email })
        .then(async (user) => {
            if (!user) {
                return res.json({ message: "Email does not match!" });
            }
            await Post.findOne({ Id: id })
                .then(async (postsOnly) => {
                    postsOnly.comments.push({ comment: comment, author: email, date: date, name: name });
                    postsOnly.save();
                })
            return res.json({ message: 'Comment Successfully uploaded' })
        })
})

export default AddCommentoPost;