//Vamos a usar Express para crear el mismo código de "app-old.js"
//Documentación de express npm: https://www.npmjs.com/package/express
//sitio oficial de express: https://expressjs.com/
import express from 'express';
//? en módulos de JS las variable __dirname y __filename no existen así que debemos crearla asi: 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//? cuando usamos commonJS "CJS" o los "type" "common" si existen y esto se puede saltar

const app = express();
const port = 8080;

app.use(express.static('public/webApp'));


app.get('/',  (req, res)=>{
   
});

//si queremos cambiar la ruta que se muestra en el navegador 'localhost:8080/generic.html' debemos hacerlo
//desde los menú de cada archivo html para reflejar el cambio y poner la ruta que querríamos
//por ejemplo /generic  
app.get('/generic',  (req, res)=>{
   res.sendFile(__dirname + '/public/web/generic.html');
});

app.get('/elements',  (req, res)=>{
    res.sendFile(__dirname + '/public/web/elements.html');
 });

app.listen(port, () => {
    console.log(`Example app v2.0 listening on port ${port}`)
});