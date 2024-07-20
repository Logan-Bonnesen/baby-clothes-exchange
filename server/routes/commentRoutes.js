const express = require('express')
const router = express.Router()
const { createComment, getCommentsByItemId, deleteComment, updateComment } = require('../controllers/commentController')
const auth = require('../middleware/auth')

// create new comment
router.post('/', auth, createComment)

// get comments for a specific item
router.get('/item/:itemId', getCommentsByItemId)

// update a comment 
router.put('/:id', auth, updateComment)

// delete a comment
router.delete('/:id', deleteComment)

module.exports = router
