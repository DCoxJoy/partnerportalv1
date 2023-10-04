const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')
const Asset = require('../models/assetModel')


//@desc Get a user assets
//@route GET/api/assets
//@access Private
const getAssets = asyncHandler(async(req, res) => {
    //Get user using id in JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    const assets = await Asset.find({user: req.user.id})

    res.status(200).json(assets)
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