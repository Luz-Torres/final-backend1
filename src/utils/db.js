import mongoose from 'mongoose';
// CONEXION A LA BASE DE DATOS MODE MONGO
const connectDB = async () => {
    try {
        //VERIFICA QUE LA VARIABLE URI_MONGO EXISTA
        const URI_CONECTION = process.env.URI_MONGO;
        if (!URI_CONECTION) {
            console.error('Error: La URI de conexión a MongoDB no está definida. Asegúrate de que el archivo .env tiene la variable URI_MONGO configurada.');
            process.exit(1);
        }

        await mongoose.connect(URI_CONECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conexión exitosa a la base de datos MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
};
export default connectDB;