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
import hbs from 'hbs';
import 'dotenv/config'; //importamos las variables de entorno

const app = express();
const port = process.env.PORT; //esta variable se puede cambiar dependiendo el puerto necesario para una página


/**
 * HandleBars (HBS para express) es una librería de node utilizada para renderizar código HTML usualmente
 * en donde podemos re utilizar código cuando debamos repetirlo constantemente.
 * por ejemplo footer's, Nav's o menús desplegables que usemos en varias páginas a la vez
 */


//aquí estamos diciéndole a express que usaremos la librería handlebars para renderizar archivos HTML
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); 


app.use(express.static('public/webApp')); //usaremos los archivos de la página web, pero con HBS

//hacemos llamado a las vistas parciales que usaremos en nuestra app
console.log(__dirname);

app.get('/',  (req, res)=>{
   //aquí renderizaremos el archivo hbs que tenemos en la carpeta de las vistas
    res.render('home',{
        nombre: 'Daniel Romero',
        titulo: 'NodeJS Development'
    });
    //? el segundo argumento de render() son opciones, que podría ser variables que usariamos
    //en nuestro archivo home.hbs para renderizar ciertos bloques de código
    //? ver el archivo views/home.hbs para ver como se utilizan las opciones con los '{{ x }}' 
});


app.get('/generic',  (req, res)=>{
    res.render('generic',{
        nombre: 'Daniel Romero',
        titulo: 'NodeJS Development'
    });
});


app.get('/elements',  (req, res)=>{
    //aquí renderizaremos el archivo hbs que tenemos en la carpeta de las vistas
     res.render('elements',{
        nombre: 'Daniel Romero',
        titulo: 'NodeJS Development'
    });
  
});
 

app.listen(port, () => {
    console.log(`Example app with handlebars library listening on port ${port}`)
});