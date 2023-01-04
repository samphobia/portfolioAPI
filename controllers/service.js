const  { Services }  = require("../models/service")

exports.postServiceData = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.details;
  const services = new Services({
    title: title,
    description: description,
    imageUrl: imageUrl
  })
  services.save()
  .then(result => {
    res.status(200).json({
      data: result,
      status: "success",
      message: "new service added"
    })
  })
  .catch(err => {
    res.status(404).json({
      error: err,
      status: "Failed",
      message: "could not add service to database"
    })
  }) 
}

exports.getServices = (req, res, next) => {
  Services.find()
  .then(service => {
    res.status(200).json({
      service: service,
      status: "Success",
      message: "service loaded"
    })
  })
  .catch(err => {
    res.status(400).json({
      error: err,
      status: "Failed",
      message: "Resource Loading failed"
    })
  })
}