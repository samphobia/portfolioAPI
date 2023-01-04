const express = require("express")

const serviceController = require("../controllers/service")

const router = express.Route()

router.get('/services', serviceController.getserviceData)