const express = require('express')
const app = express()

const PORT = 4001


app
  .get('/', (req, res) => {
    console.log('soy un get')
    res.send({
      message: 'soy un get'
    })
  })
// .get('/:id', (req, res) => {
//   console.log(req.params)
//   res.json({
//     message: req.params.id
//   })
// })
// .get('/query', (req, res) => {
//   console.log(req.query)
//   res.json({
//     message: req.query.nombre
//   })
// })
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})