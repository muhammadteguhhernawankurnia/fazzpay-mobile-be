const express = require('express');
const transferRouter = express();

//import controller
const transferController = require('../controller/transfer.controller');

//import route
transferRouter.get('/', transferController.get);
transferRouter.get('/:id', transferController.getDetail);
transferRouter.post('/', transferController.add);
transferRouter.patch('/:id', transferController.update);
transferRouter.delete('/:id', transferController.remove);

module.exports = transferRouter;
