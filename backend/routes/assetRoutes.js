const express = require('express')
const router = express.Router()
const {getAssets, getAsset, createAsset, deleteAsset, updateAsset} = require('../controllers/assetController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getAssets).post(protect, createAsset)

router.route('/:id').get(protect, getAsset).delete(protect, deleteAsset).put(protect, updateAsset)

module.exports = router