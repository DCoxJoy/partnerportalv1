const express = require('express')
const router = express.Router()
const {getAssets, createAsset} = require('../controllers/assetController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getAssets).post(protect, createAsset)

module.exports = router