const mongoose = require('mongoose')

const Schema = mongoose.Schema

const servicesSchema = new Schema ({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3000,
  },
  imageUrl: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3000,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3000,
  },
},
{ timestamps: true}
)

const Services = mongoose.model('Services', servicesSchema)

exports.Services = Services