const express = require('express');
const app = express();
//app.user(express.json()); //para llamar al modulo de JSON en express

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.get('/user',(req,res)=>{
    res.json({
        user: 'JAL',
        nombre: 'Jose Alvarado Lorenzo'
    })
})

app.get('/traer',(req,res)=>{
    res.send('traer datos')
})


app.put('/actualizar',(req,res)=>{
    res.send('actualizar datos')
})

app.post('/crear',(req,res)=>{
    res.send('crear datos')
})

app.delete('/eliminar',(req,res)=>{
    res.send('eliminar datos')
})

app.listen(3000,() =>{
    console.log('Server en el puerto 3000')
})


