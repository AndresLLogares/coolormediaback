import express from 'express';
import Post from '../db/models/post.js';

const GetPostByuuid = express.Router();

GetPostByuuid.post('/', async (req, res) => {

    const { useruuid } = req.body;

    await Post.find({ useruuid: useruuid })
        .then(post => {
            if (!post) {
                return res.json({ message: "Email does not match!" });
            }
            return res.json({ posts: post })
        })
})

export default GetPostByuuid;