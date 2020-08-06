// Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// DB
let urlDB

if(process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost/cafe'
} else {
  urlDB = 'mongodb+srv://maad:a8LNsKXtcZXlFp6B@mini-twitter-jfqbg.mongodb.net/cafe'
}

process.env.URLDB = urlDB;