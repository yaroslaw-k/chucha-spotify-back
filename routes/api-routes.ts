const apiRouter = require('express').Router();
const apiController = require('../controllers/api-controller');

apiRouter.get('/test', apiController.test)

module.exports = apiRouter;
