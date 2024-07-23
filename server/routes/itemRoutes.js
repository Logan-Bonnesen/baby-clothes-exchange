const express = require('express')
const router = express.Router()
const { createItem, getItems, getItemById, updateItem, deleteItem, getItemsByUser } = require('../controllers/itemController')
const auth = require('../middleware/auth')

// create new item
router.post('/', auth, createItem)

// get all items
router.get('/', getItems)

// Get items by user
router.get('/user', auth, getItemsByUser);

// get item by ID
router.get('/:id', getItemById)

// update item
router.put('/:id', auth, updateItem)

// delete item
router.delete('/:id', auth, deleteItem)

module.exports = router