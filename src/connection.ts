import mongoose from 'mongoose';

const uri = 'mongodb+srv://Budi:coodesh@cluster0.iafrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectToDatabase = () => mongoose.connect(uri);

export default connectToDatabase;
