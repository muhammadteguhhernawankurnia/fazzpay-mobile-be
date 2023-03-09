const express = require('express');
const userRouter = express();

//import controller
const userController = require('../controller/user.controller');

//import route
userRouter.get('/', userController.get);
userRouter.get('/:id', userController.getDetail);
userRouter.post('/', userController.add);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

module.exports = userRouter;
