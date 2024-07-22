import React, { useState, useEffect } from 'react';

const UpdateItemModal = ({ isOpen, onClose, item, onUpdate }) => {
    const [updatedItem, setUpdatedItem] = useState({
        description: '',
        size: '',
        color: '',
        condition: '',
        availability: '',
    });

    useEffect(() => {
        if (item) {
            setUpdatedItem(item);
        }
    }, [item]);

    const handleChange = (e) => {
        setUpdatedItem({
            ...updatedItem,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedItem);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Update Item</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={updatedItem.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Size:
                        <input
                            type="text"
                            name="size"
                            value={updatedItem.size}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Color:
                        <input
                            type="text"
                            name="color"
                            value={updatedItem.color}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Condition:
                        <input
                            type="text"
                            name="condition"
                            value={updatedItem.condition}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Availability:
                        <select
                            name="availability"
                            value={updatedItem.availability}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select availability</option>
                            <option value="For Sale">For Sale</option>
                            <option value="For Trade">For Trade</option>
                            <option value="Requested">Requested</option>
                        </select>
                    </label>
                    <button type="submit">Update Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItemModal;
