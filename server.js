var canciones = require('./canciones');
var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, function () { 
  console.log('Escuchando en puerto 3000!');
});

app.use('/canciones', canciones);

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/acerca',function (req, res) {
    res.sendFile(path.join(__dirname,'public','acerca.html'));
});

app.use(function(req,res,next){
    res.status(404).send('La pagina que solicita no existe')
})
