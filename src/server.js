import express from "express";
import expressHandlebars from "express-handlebars";
import mongoose from "mongoose";
import dotenv from "dotenv";
import __dirname from "./utils/dirname.js";
import productRouter from "./routes/product.router.js";
import path from 'path'
//CARGAR VARIABLES DE ENTORNO
dotenv.config({ path: path.join(__dirname, '.env') });


// IMPORTACION DE ROUTERS
const app = express();
const { engine } = expressHandlebars;

// CONFIGURACION PARA TRABAJAR CON JSON
app.use(express.json());


// Verifica que la variable URI_MONGO esté definida
const URI_CONECTION = process.env.URI_MONGO;
if (!URI_CONECTION) {
    console.error('Error: La URI de conexión a MongoDB no está definida. Asegúrate de que el archivo .env tiene la variable URI_MONGO configurada.');
    process.exit(1); // SALIR DEL PROCESO SI NO ESTA DEFINIDA
}

// CONEXIÓN A LA BASE DE DATOS
mongoose.connect(URI_CONECTION)
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => console.error('Error de conexión:', err)
);

// INICIALIZACIÓN DEL MOTOR DE PLANTILLAS
app.engine('hbs', engine());
app.set('views', __dirname + '/view');
app.set('view engine', 'hbs');

//SETEO DE LA CARPETA PUBLIC
app.use(express.static(__dirname + '/public'));


//ROUTER PRODUCTS
app.use('/products',productRouter);

//FORMULARIO NUEVO PRODUCTO
app.get('/newProduct', (_req,res)=>{
    res.render('newProduct');
})

// CREACIÓN DEL SERVIDOR
const PORT = 8080;
const BASE_URL = `http://localhost:${PORT}`;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto port ${PORT}. Ingresar en ${BASE_URL}`);
});
