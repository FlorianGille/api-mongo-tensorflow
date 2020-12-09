const tensorFlowModel = require('../models/tensorFlowModel')

exports.getTensorflows = (req, res, next) => {
  tensorFlowModel.find({}).then(data => res.status(200).json(data))
}

exports.updateTensorflow = (req, res, next) => {
  tensorFlowModel.updateOne({ _id: req.params.id }, { ...req.body }).then(data => res.status(200).json({ ...req.body }))
}

exports.deleteTensorflow = (req, res, next) => {
  tensorFlowModel.deleteOne({ _id: req.params.id }).then(() => res.status(200).json({ message: 'OK' }))
}

exports.createTensorflow = (req, res, next) => {
  tensorFlowModel.create({ ...req.body }).then(data => res.status(200).json(data))
}
