// Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento

// 60 segundos
// 60 minutos 
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SEED de autenticación

process.env.SEED = process.env.SEED || 'este-es-seed-desarrollo';

// DB
let urlDB

if(process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost/cafe'
} else {
  urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;

// Google Client ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '654992497006-vb0mb63utunj6ihq4g8etsjlafdi74sc.apps.googleusercontent.com';
