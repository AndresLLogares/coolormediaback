import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const friendsSchema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    useruuid: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    request: {
        type: Boolean,
        required: true
    },
    messages: {
        type: Array,
        defaultValue: [],
        required: false
    },
    emailfriend: {
        type: String,
        required: true
    },
    namefriend: {
        type: String,
        required: true
    },
    frienduuid: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserFriends = mongoose.model("friends", friendsSchema);

export default UserFriends;