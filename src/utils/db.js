import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
// CONEXION A LA BASE DE DATOS MODE MONGO
const connectDB = async () => {

    try {
        //VERIFICA QUE LA VARIABLE URI_MONGO EXISTA
        const URI_CONNECTION = process.env.URI_MONGO;
        if (!URI_CONNECTION) {
            console.error('Error: The MongoDB connection URI is not defined or is invalid.');
            process.exit(1);
        }

        await mongoose.connect(URI_CONNECTION);

        console.log('Successfully connected to the MongoDB database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};
export default connectDB;