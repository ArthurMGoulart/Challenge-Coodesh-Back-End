import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
 
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.iafrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectToDatabase = () => mongoose.connect(uri);

export default connectToDatabase;
 