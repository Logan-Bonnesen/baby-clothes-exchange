const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    description: {
        type: String, 
        required: true, 
    },
    size: {
        type: String, 
        required: true, 
    },
    color: {
        type: String, 
        required: true, 
    },
    condition: {
        type: String, 
        required: true, 
    },
    availability: {
        type: String, 
        required: true, 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item;