const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect('mongodb+srv://sabinacavadova005:sebine1510@cluster0.nr4wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>{ 
    console.log('Connected!')   
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  });