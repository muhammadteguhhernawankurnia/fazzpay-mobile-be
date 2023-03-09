const express = require('express');
const authRouter = express();

//import controller
const authController = require('../controller/auth.controller');

//import route
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);

module.exports = authRouter;
