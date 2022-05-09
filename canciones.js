var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public','canciones.html'));
})
router.get('/descarga/waka', function (req, res) {
    res.download(path.join(__dirname,'public','files','shakira.jpg'),'shakira.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});
router.get('/descarga/avicii', function (req, res) {
    res.download(path.join(__dirname,'public','files','avicii.jpg'),'avicii.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});
router.get('/descarga/maps', function (req, res) {
    res.download(path.join(__dirname,'public','files','maps.jpg'),'maps.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});
router.get('/descarga/dua', function (req, res) {
    res.download(path.join(__dirname,'public','files','dua.jpg'),'dua.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});
router.get('/descarga/shake', function (req, res) {
    res.download(path.join(__dirname,'public','files','shake.jpg'),'shake.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});
router.post('/',function(req,res){
    res.status(200).send('Respuesta a POST!');
})
router.put('/',function(req,res){
    res.status(200).send('Respuesta a PUT!');
})
router.delete('/',function(req,res){
    res.status(200).send('Respuesta a DELETE!');
})

module.exports = router;