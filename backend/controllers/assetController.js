const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Asset = require('../models/assetModel')


//@desc Get a user assets
//@route GET/api/assets
//@access Private
const getAssets = asyncHandler(async(req, res) => {
    //Get user using id in JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const assets = await Asset.find({user: req.user.id})
    res.status(200).json(assets)
})

//@desc Get single user asset
//@route GET/api/assets/:id
//@access Private
const getAsset = asyncHandler(async(req, res) => {
    //Get user using id in JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const asset = await Asset.findById(req.params.id)

    if(!asset) {
        res.status(404)
        throw new Error('Asset not found')

    }

    if(asset.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    res.status(200).json(asset)
})

//@desc Create new asset
//@route POST/api/assets
//@access Private
const createAsset = asyncHandler(async(req, res) => {
    const {product, description} = req.body

    if(!product || !description) {
        res.status(400)
        throw new Error('Please add a product and description')
    }
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const asset = await Asset.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })

    res.status(201).json(asset)
})

//@desc DELETE single user asset
//@route DELETE/api/assets/:id
//@access Private
const deleteAsset = asyncHandler(async(req, res) => {
    //Get user using id in JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const asset = await Asset.findByIdAndDelete(req.params.id)

    if(!asset) {
        res.status(404)
        throw new Error('Asset not found')

    }

    if(asset.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }
    //await asset.remove()

    res.status(200).json({success: true})
})

//@desc UPDATE user asset
//@route PUT/api/assets/:id
//@access Private
const updateAsset = asyncHandler(async(req, res) => {
    //Get user using id in JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const asset = await Asset.findById(req.params.id)

    if(!asset) {
        res.status(404)
        throw new Error('Asset not found')

    }

    if(asset.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedAsset)
})

module.exports = {
    getAssets,
    getAsset,
    createAsset,
    deleteAsset,
    updateAsset,
}