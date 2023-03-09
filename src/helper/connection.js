//koneksi ke pg dengan npm pg dan dokumentasi di node pg
const { Client } = require('pg');
//menambahkan .env
require('dotenv').config();

const db = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

//client conect ngambil dari const client = new client dan cek koneksi db
db.connect((err) => {
  if (!err) {
    console.log('database berhasil tersambung');
  } else {
    console.log('database error connection', err);
  }
});

//ekspor db untuk string dipake di luar
module.exports = db;
