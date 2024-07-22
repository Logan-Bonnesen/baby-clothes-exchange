import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, addItem, deleteItem, updateItem } from '../actions/itemActions'

const Items = () => {
    const dispatch = useDispatch()
    const { items, loading } = useSelector(state => state.items)

    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: 0
    })

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    const handleChange = (e) => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }

    const handleAddItem = (e) => {
        e.preventDefault()
        dispatch(addItem(newItem))
        setNewItem({
            name: '',
            description: '',
            price: 0
        })
    }

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id))
    }

    const handleUpdateItem = (id) => {
        const updatedItem = { ...newItem }
        dispatch(updateItem(id, updatedItem))
    }

    return (
        <div>
            <h2>Items</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <form onSubmit={handleAddItem}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={newItem.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={newItem.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={newItem.price}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit">Add Item</button>
                    </form>
                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                <p><strong>Name:</strong> {item.name}</p>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                <button onClick={() => handleUpdateItem(item._id)}>Update</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Items