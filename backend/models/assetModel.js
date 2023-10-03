const mongoose = require('mongoose')
const assetSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required:[true, 'Please select a product category'],
        enum: ['Cases', 'Mounts', 'Carts', 'Kiosks'],
    },
    description: {
        type: String,
        required:[true, 'Please enter a description of assets needed']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
{
 timestamps: true,  
})

module.exports = mongoose.model('Asset', assetSchema)