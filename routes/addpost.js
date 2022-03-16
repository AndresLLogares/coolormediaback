import express from 'express';
import Post from '../db/models/post.js';
import User from '../db/models/users.js';

const AddPost = express.Router();

AddPost.post('/', async (req, res) => {

    const { email, title, image, description, id, date, name, useruuid, picture } = req.body;

    await User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ message: "Email does not match!" });
            }
            else {
                const newPost = new Post({
                    user: email,
                    picture: picture,
                    useruuid: useruuid,
                    title: title,
                    name: name,
                    image: image,
                    description: description,
                    Id: id,
                    created: date,
                })
                newPost.save()
                    .then(() => { res.json({ message: 'Post Added' }) })
                    .catch((error) => console.log(error))
            }
        })
})

export default AddPost;