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
const port = 8080; //esta variable se puede cambiar dependiendo el puerto necesario para una página


//Para usar contenido estático (contenido público) vamos a utilizar los middleware
app.use(express.static('public')); //dentro de static se debe poner el path de la carpeta 'public'


//? Si usamos los middleware no vamos a ver la ruta '/' porque esa es la ruta publica 
app.get('/',  (req, res)=>{
    res.send('Hello World')
  });

  //? estas rutas si se verán porque son rutas definidas nuevas
  //para crear diferentes rutas debemos crearlas igual que el eje anterior:
app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo home page')
  });


app.get('*',(req,res)=>{
    //podemos utilizar archivos html para mostrarlos en rutas definidas:
    res.sendFile(__dirname + '/public/404.html'); //el __dirname utiliza la ruta actual de instalación
    //de node y el + concatenamos la dirección del archivo HTML que deseamos usar.
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});