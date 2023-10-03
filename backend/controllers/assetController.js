const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')
const Asset = require('../models/assetModel')


//@desc Get a user assets
//@route GET/api/assets
//@access Private
const getAssets = asyncHandler(async(req, res) => {

    res.status(200).json({message: 'getAssets'})
})

//@desc Create new asset
//@route POST/api/assets
//@access Private
const createAsset = asyncHandler(async(req, res) => {

    res.status(200).json({message: 'createAsset'})
})

module.exports = {
    getAssets,
    createAsset,
}