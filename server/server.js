require('./config/config')
const express = require('express')
const mongoose = require('mongoose');


const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(require('./routes/usuario'));

// mongoose.connect('mongodb://localhost:27017/cafe',(err,res) => {
//   if(err) throw err;
//   console.log('Base de datos ONLINE')
// });
//maad
// a8LNsKXtcZXlFp6B
//mongodb+srv://maad:a8LNsKXtcZXlFp6B@mini-twitter-jfqbg.mongodb.net/cafe
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