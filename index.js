const express = require('express');
const app = express();
const path = require('path');
let estudios  ={
    'Media técnica' : 'Programacion', 
    'primaria' : 1,
    'secundaria': 2,

    'about me' : 'Name : Mario Alejandro Ortega Alzate  lorem ispum...',

    'experiencia' : 'Lorem ipsum dolor sit amet…',
    
    'Contactos' : 'Contacto 1: alejo.ortegaa@gmail.com ... Contacto 2: Github',

    'Hobbies' : 'Me encanta jugar videojuegos, escribir y programar',
    'Hello matherfucker' : 'Hello'


}





app.get('/api', function (req, res) {
    res.json(estudios);          
  });



app.listen(4000, function () {
  console.log(' estamos corriendo');
});

app.get('/page', function (req, res) {
  res.sendFile(path.join(__dirname+'/clase_super/index.html'))
});