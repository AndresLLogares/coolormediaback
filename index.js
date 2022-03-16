import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { passportconfig } from './validation/validation.js';
import passport from 'passport';
import morgan from 'morgan';
import Login from './routes/login.js';
import SingUp from './routes/signup.js';
import GetUser from './routes/getuser.js';
import GenLink from './routes/geneLink.js';
import Redirect from './routes/redirect.js';
import Reset from './routes/reset.js';
import UploadPhotos from './routes/uploadPhotos.js';
import AddTechno from './routes/addTechno.js';
import AddCountry from './routes/addcountries.js';
import AddOthers from './routes/addothers.js';
import DeleteOther from './routes/deleteother.js';
import AddEducation from './routes/addeducation.js';
import DeleteEducation from './routes/deleteeducation.js';
import AddJobs from './routes/addjobs.js';
import DeleteJobs from './routes/deletejobs.js';
import AddPosts from './routes/addpost.js';
import DeletePosts from './routes/deletepost.js';
import GetPosts from './routes/getposts.js';
import AddCommentoPost from './routes/addcommentpost.js';
import HandleLike from './routes/handlelike.js';
import GetPostByUser from './routes/getpostsbyuser.js';
import GetAllUsers from './routes/getallusers.js';
import GetUserByUUID from './routes/getuserbyuuid.js';
import AddFriend from './routes/addfriends.js';
import GetFriends from './routes/getfriends.js';
import RemoveFriend from './routes/removecontact.js';
import HandleRequest from './routes/handlerequest.js';
import HandleMessage from './routes/handlemessage.js';
import GetPostByuuid from './routes/getpostbyuuid.js';
import GetFriendsUUID from './routes/getfriendsuuid.js';

dotenv.config();

const app = express();

const { PORT } = process.env || 5000;

const MongoURL = process.env.MongoURL;

const CONNECTION_URL = MongoURL;

app.use(bodyparser.json({ limit: "30mb", extende: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extende: true }));
app.use(cors());

app.use(passport.initialize());

app.use(passport.session());

passportconfig(passport);

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("Welcome to Pink Bio")
})

app.use('/login', Login);
app.use('/signup', SingUp);
app.use('/getuser', GetUser);
app.use('/geneLink', GenLink);
app.use('/redirect', Redirect);
app.use('/reset', Reset);
app.use('/UploadPhotos', UploadPhotos);
app.use('/addtechno', AddTechno);
app.use('/addcountry', AddCountry);
app.use('/addothers', AddOthers);
app.use('/deleteother', DeleteOther);
app.use('/addeducation', AddEducation);
app.use('/deleteeducation', DeleteEducation);
app.use('/addjobs', AddJobs);
app.use('/deletejobs', DeleteJobs);
app.use('/addposts', AddPosts);
app.use('/deleteposts', DeletePosts);
app.use('/getposts', GetPosts);
app.use('/addcommenttopost', AddCommentoPost);
app.use('/handlelike', HandleLike);
app.use('/getpostbyuser', GetPostByUser);
app.use('/getallusers', GetAllUsers);
app.use('/getuserbyuuid', GetUserByUUID);
app.use('/addfriends', AddFriend);
app.use('/getfriends', GetFriends);
app.use('/removecontact', RemoveFriend);
app.use('/handlerequest', HandleRequest);
app.use('/handlemessage', HandleMessage);
app.use('/getpostbyuuid', GetPostByuuid);
app.use('/getfriendsuuid', GetFriendsUUID);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on server ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);