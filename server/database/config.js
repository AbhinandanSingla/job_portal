const CONNECTION_URL =process.env.MONGO_DB_CONNECTION_STRING
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
