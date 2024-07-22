import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, addItem, deleteItem, updateItem } from '../actions/itemActions'
import UpdateItemModal from './UpdateItemModal';

const Items = () => {
    const dispatch = useDispatch()
    const { items, loading } = useSelector(state => state.items)

    const [newItem, setNewItem] = useState({
        description: '',
        size: '',
        color: '',
        condition: '',
        availability: '',
    })

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            description: '',
            size: '',
            color: '',
            condition: '',
            availability: '',
        })
    }

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id))
    }

    const handleUpdateItem = (item) => {
        dispatch(updateItem(item._id, item));
        setSelectedItem(null);
        setIsModalOpen(false);
    }

    const openUpdateModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h2>Items</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <form onSubmit={handleAddItem}>
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
                            Size:
                            <input
                                type="text"
                                name="size"
                                value={newItem.size}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Color:
                            <input
                                type="text"
                                name="color"
                                value={newItem.color}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Condition:
                            <input
                                type="text"
                                name="condition"
                                value={newItem.condition}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Availability:
                            <select
                                name="availability"
                                value={newItem.availability}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select availability</option>
                                <option value="For Sale">For Sale</option>
                                <option value="For Trade">For Trade</option>
                                <option value="Requested">Requested</option>
                            </select>
                        </label>
                        <button type="submit">Add Item</button>
                    </form>
                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>Size:</strong> {item.size}</p>
                                <p><strong>Color:</strong> {item.color}</p>
                                <p><strong>Condition:</strong> {item.condition}</p>
                                <p><strong>Availability:</strong> {item.availability}</p>
                                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                <button onClick={() => openUpdateModal(item)}>Update</button>
                            </li>
                        ))}
                    </ul>
                    {isModalOpen && (
                        <UpdateItemModal 
                            isOpen={isModalOpen}
                            onClose={closeUpdateModal}
                            item={selectedItem}
                            onUpdate={handleUpdateItem}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default Items