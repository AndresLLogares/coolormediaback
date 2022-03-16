import express from 'express';
import Post from '../db/models/post.js';

const GetPost = express.Router();

GetPost.get('/', async (req, res) => {

    await Post.find({})
        .then((post) => {
            res.json({ post })
        })
        .catch((error) => console.log(error))
})

export default GetPost;
