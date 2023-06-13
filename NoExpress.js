import * as http from 'http';

/**
 * HTTP es un paquete de node que nos va a ayudar a realizar web servers
 * documentación: https://nodejs.org/dist/latest-v18.x/docs/api/http.html
 * 
 */

//la función createServer maneja 2 parámetros request y response
//request hace alusión a una petición y response a una respuesta
http.createServer((request,response)=>{

    console.log(request);

    //aquí estamos declarando que queremos descargar el archivo con el nombre que pusimos 
    response.setHeader('Content-Disposition','attachment; filename=lista.csv');
    response.setHeader('Content-Type', 'application/csv');
    response.writeHead(200,) //podemos cambiar el tipo de archivo 
    //el "content-type" indica lo que la página es, en este caso un archivo excel delimitado por comas

    response.write('id, nombre\n');
    response.write('1, Daniel\n');
    response.write('2, Franciny\n');
    response.write('3, Jusef\n');

    // const persona = {
    //     id: 1,
    //     nombre: 'Daniel R.'
    // }
    // response.write(JSON.stringify(persona)); //debemos cambiar todo a texto para poder escribirlo en la response

    // response.write('Hola mundo'); //utilizamos el write para mandar un mensaje 
    response.end(); //usamos end para finalizar la petición cuando deseemos


})
.listen(8080); //listen hace referencia al puerto que deseamos usar para levantar el servidor

//en este caso utilizar "localhost:8080"
console.log('Escuchando el puerto',8080);


