import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    friends: {
        type: Array,
        default: []
    },
    technologies: {
        type: Array,
        default: []
    },
    date_Of_Birthday: {
        type: String,
        required: true
    },
    photo_profile: {
        type: String,
        required: false
    },
    photo_back: {
        type: String,
        required: false
    },
    photos: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    country: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    flag: {
        type: String,
        required: false
    },
    more_info: {
        type: Array,
        required: false
    },
    education: {
        type: Array,
        required: false
    },
    jobs: {
        type: Array,
        required: false
    },
    hash: {
        type: String,
        required: false
    },
    uuid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const user = mongoose.model("users", userSchema);

export default user;