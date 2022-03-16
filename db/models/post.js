import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    Id: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    comments: {
        type: Array,
        defaultValue: [],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    likes: {
        type: Array,
        required: false
    },
    useruuid: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const post = mongoose.model("post", postSchema);

export default post;