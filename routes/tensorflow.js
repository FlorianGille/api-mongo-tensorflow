const express = require('express');
const router = express.Router();
const path = require('path');
const tensorFlowController = require('../controllers/tensorFlowController')

router.get('/', tensorFlowController.getTensorflows);

router.get('/:id/edit', tensorFlowController.updateTensorflow);

router.get('/:id/delete', tensorFlowController.deleteTensorflow);

router.get('/create', tensorFlowController.createTensorflow);

module.exports = router;