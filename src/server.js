import express from "express";
import expressHandlebars from "express-handlebars";
import dotenv from "dotenv";
import path from 'path';
import __dirname from "./utils/dirname.js";
import connectDB from "./utils/db.js"
import productRouter from "./routes/product.router.js";

//CARGAR VARIABLES DE ENTORNO
dotenv.config({ path: path.join(__dirname, '.env') });


//INICIAR EXPRESS
const app = express();
const { engine } = expressHandlebars;

//CONFIGURACION PARA TRABAJAR CON JSON
app.use(express.json());

// si CONEXIÓN A LA BASE DE DATOS
connectDB();

//INICIALIZACIÓN DEL MOTOR DE PLANTILLAS
app.engine('hbs', engine());
app.set('views', path.join(__dirname+'view'));
app.set('view engine', 'hbs');

//SETEO DE LA CARPETA PUBLIC
app.use(express.static(path.join(__dirname+'public')));


//ROUTER PRODUCTS
app.use('/products',productRouter);

//FORMULARIO NUEVO PRODUCTO
app.get('/newProduct', (_req,res)=>{
    res.render('newProduct');
})

//CREACIÓN DEL SERVIDOR
const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto port ${PORT}. Ingresar en ${BASE_URL}`);
});
