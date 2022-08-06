const CONNECTION_URL =
    "mongodb+srv://Abhinandan:deepusingla0448@cluster0.trl8w.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('connection is successful');
    }).catch((e) => {
        console.log(`there is a problem in connection ERROR : ${e}`)
    });
}

export default connectDB();
