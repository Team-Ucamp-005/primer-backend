const express = require('express')
const bodyParser = require('body-parser').json()
const app = express()

const { coursesRouter } = require('./api')

const PORT = 4001

app.use('/courses', coursesRouter)

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
  //   const { nombre, apellido } = req.query
  //   res.send({
  //     nombre: nombre,
  //     apellido: apellido
  //   })
  // })
  .post('/login', bodyParser, (req, res) => {
    console.log('-------')
    console.log(req.body)
    console.log('-------')
    const { email, password } = req.body
    res.send({
      email: email,
      pass: password
    })
  })



app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})