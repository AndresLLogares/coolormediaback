import express from 'express';
import Post from '../db/models/post.js';

const GetPostByUser = express.Router();

GetPostByUser.post('/', async (req, res) => {

    const { email } = req.body;

    await Post.find({ user: email })
        .then(post => {
            if (!post) {
                return res.json({ message: "Email does not match!" });
            }
            return res.json({ posts: post })
        })
})

export default GetPostByUser;