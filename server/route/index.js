const router = require('express').Router();
const authMiddleware = require('../../middlewares/ auth');
const controller = require('./list controller');

router.route('/').get(controller.gettodolist);

router.route('/').post(controller.createtodo);

router.route('/').delete(controller.droptodo);

module.exports = router;