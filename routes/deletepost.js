import { listenerCount } from 'events';
import express from 'express';
import Post from '../db/models/post.js';
import User from '../db/models/users.js';

const DeletePost = express.Router();

DeletePost.post('/', async (req, res) => {

    let { email, id } = req.body;

    await User.findOne({ email: email })
        .then(async (user) => {
            if (!user) {
                return res.json({ message: "Email does not match!" });
            }
            else {
                await Post.deleteOne({ Id: id });
                return res.json({ message: "Post Deleted successfully" });
            }
        })
})

export default DeletePost;