const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item', 
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now,
    },
});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment