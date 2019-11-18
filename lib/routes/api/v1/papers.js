const express = require('express')
const router = express.Router()
const papersController = require('../../../controllers/papers_controller')

router.get('/', papersController.index)

module.exports = router
