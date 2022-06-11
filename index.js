//1.- importar mis dependencias
const express = require('express')
// 2.- creo el objeto de mi aplicacion
const app = express()

const PORT = 4000

// req = request | Representa la peticion
// res = response | Representa la respuesta que voy a regresar 

// 3.- defino mis rutas
app.use('/', (req, res) => {
  res.send({
    message: 'Hola Mundo'
  })
})

// levanta el servidor de mi app
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})