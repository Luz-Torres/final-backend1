//DEVUELVE LA RUTA DEL DIRECTORIO DEL ARCHIVO ACTUAL

/* import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default __dirname;