const { urlencoded, json } = require('express');
const express = require('express');
const app = express();
//manggil db koneksi
const db = require('./src/helper/connection');

//add cors
const cors = require('cors');
app.use(cors());

//add router
const router = require('./src/route/index');

//defaultnya express js itu tidak menerima semua jenis form
//menerima application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));
//menerima json
app.use(json());

//add route prefiks version
app.use('/api/v1/', router);

//get not found route
app.get('*', (req, res) => {
  return res.send({
    status: 404,
    message: 'page not found',
  });
});

//port untuk be biasanya di port 5000
app.listen(5002, () => {
  console.log('backend success running on port 5002');
});
