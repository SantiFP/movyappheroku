const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('este es el test')
})

app.get('/ruta', (req,res)=>{
    res.send('otra ruta')
})

app.listen(PORT, () =>{
    console.log("Server working")
})
