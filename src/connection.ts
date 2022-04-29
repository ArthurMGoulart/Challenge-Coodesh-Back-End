require('dot-env');

import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.iafrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectToDatabase = () => mongoose.connect(uri);

export default connectToDatabase;
