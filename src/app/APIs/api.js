const express = require('express');
const app = express();
const port  = 3000;

const datos = [
    { id: 1, mensaje: 'Estos son los mensajes' },
    { id: 2, mensaje: 'de prueba, para validar' },
    { id: 3, mensaje: 'el correcto funcionamiento' },
    { id: 4, mensaje: 'de las APIs del proyecto' },
  ];

app.get('/api/datos', (req, res) => {
    res.json(datos);
});

app.get('/api/mensajes', (req, res) => {
    const mensajes = datos.map(dato => dato.mensaje);
    res.json(mensajes);
  });

//prueba de escucha del puerto
app.listen(port, () => {
    console.log(`Se esta escuchando el puerto ${port} correctamente`);
});