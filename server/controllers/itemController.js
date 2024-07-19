const Item = require('../models/Item')

// create new item
exports.createItem = async (req, res) => {
    const { title, description, size, color, condition, availability } = req.body
    try {
        const newItem = new Item({
            user: req.user.id,
            title,
            description, 
            size,
            color, 
            condition,
            availability
        });
        const item = await newItem.save()
        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('user', ['name', 'location'])
        res.json(items)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// get item by ID
exports.getItemById = async (req, res) => {
    try { 
     const item = await Item.findById(req.params.id).populate('user', ['name', 'location'])
     if (!item) {
        return res.status(404).json({ msg: 'Item not found'})
     }
     res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// update item
exports.updateItem = async (req, res) => {
    const { title, description, size, color, condition, availability } = req.body
    try {
        let item = await Item.findById(req.params.id)
        if (!item) {
            return res.status(404).json({ msg: 'Item not found'})
        }
        if (item.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        item = await Item.findByIdAndUpdate(
            req.params.id, 
            { $set: { title, description, size, color, condition, availability } },
            { new: true }
        )
        res.json(item)
    } catch (err) { 
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// delete item
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        if (!item) {
            return res.status(404).json({ msg: 'Item not found'})
        }
        if (item.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        await item.remove()
        res.json({ msg: 'Item removed'})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}