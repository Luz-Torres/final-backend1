import express from "express";
import expressHandlebars from "express-handlebars";
import dotenv from "dotenv";
import path from 'path';
import __dirname from "./utils/dirname.js";
import connectDB from "./utils/db.js";
import productRouter from "./routes/product.router.js";

// CARGAR VARIABLES DE ENTORNO
dotenv.config({ path: path.join(__dirname, '.env') });

// INICIAR EXPRESS
const app = express();
const { engine } = expressHandlebars;

// CONFIGURACIÓN PARA TRABAJAR CON JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONEXIÓN A LA BASE DE DATOS
connectDB();

// INICIALIZACIÓN DEL MOTOR DE PLANTILLAS
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

// SETEO DE LA CARPETA PUBLIC
app.use(express.static(path.join(__dirname, './public')));

// ROUTER PRODUCTS
app.use('/products', productRouter);

// FORMULARIO NUEVO PRODUCTO
app.get('/newProduct', (_req, res) => {
    res.render('newProduct');
});

// CREACIÓN DEL SERVIDOR
const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}. Ingresar en ${BASE_URL}`);
});
