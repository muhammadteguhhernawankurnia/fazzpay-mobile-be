const express = require('express');
const router = express();

//import route
const transactionRoute = require('./transaction.route');
const transferRoute = require('./transfer.route');
const userRoute = require('./user.route.js');
const authRoute = require('./auth.route.js');

//endpoint home
router.get('/', (req, res) => {
  return res.send('backend for getpay');
});

//using route
router.use('/transactions', transactionRoute);
router.use('/transfer', transferRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);

module.exports = router;
