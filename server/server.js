require('./config/config')
const express = require('express')
const mongoose = require('mongoose');


const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Routes is index.js
app.use(require('./routes/index'));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err,res) => {
  if (err) throw err;
  
  console.log('Base de datos ONLINE');
});
 
app.listen(process.env.PORT, () => {
  console.log('Escuchando el puerto:', process.env.PORT);
})