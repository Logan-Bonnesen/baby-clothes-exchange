const Comment = require('../models/Comment')
const Item = require('../models/Item')

// create a new comment 
exports.createComment = async (req, res) => {
    const { item, text } = req.body

    try { 
        // check if item exists
        const existingItem = await Item.findById(item)
        if (!existingItem) {
            return res.status(404).json({ msg: 'Item not found' })
        }

        const newComment = new Comment({
            item,
            user: req.user.id,
            text
        })

        const comment = await newComment.save()
        res.json(comment)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// get comments by item ID
exports.getCommentsByItemId = async (req, res) => {
    try {
       const comments = await Comment.find({ item: req.params.itemId }).populate('user', ['name']) 
       res.json(comments)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: 'Server error'})
    }
}

// update a comment
exports.updateComment = async (req, res) => {
    const { text } = req.body

    try {
        let comment = await Comment.findById(req.params.commentId)
        if (!comment) {
            return res.status(404).json({ msg: 'Comment not found' })
        }
        // ensure user is authorized to update comment
        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        // update text field 
        comment.text = text
        const updatedComment = await comment.save()
        res.json(updatedComment)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: 'Server error'})
    }
}

// delete a comment
exports.deleteComment = async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.commentId)
        if (!comment) {
            return res.status(404).json({ msg: 'Comment not found' })
        }
        // ensure user is authorized to delete comment
        if (comment.user.toString() !== req.user.id) {
            return res.status(404).json({ msg: 'User not authorized' })
        }

        await Comment.deleteOne({ _id: req.params.commentId })
        res.json({ msg: 'Comment removed' })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: 'Server error'})
    }
}
