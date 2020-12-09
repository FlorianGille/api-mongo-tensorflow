const express = require('express');
const router = express.Router();
const path = require('path');
const tensorFlowController = require('../controllers/tensorFlowController')

router.get('/', tensorFlowController.getTensorflows);

router.put('/:id/edit', tensorFlowController.updateTensorflow);

router.delete('/:id/delete', tensorFlowController.deleteTensorflow);

router.post('/create', tensorFlowController.createTensorflow);

module.exports = router;