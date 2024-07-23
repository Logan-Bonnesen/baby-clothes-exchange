import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserItems, deleteItem } from '../actions/itemActions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const { items, loading, error } = useSelector((state) => state.items);

    useEffect(() => {
        // Redirect to login if user is not authenticated
        if (!user) {
            navigate('/login');
        } else {
            dispatch(getUserItems());
        }
    }, [dispatch, user, navigate]);

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading items: {error}</p>;

    return (
        <div>
            <h2>User Profile</h2>
            {user && (
                <div>
                    <h3>Welcome, {user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Location: {user.location}</p>
                </div>
            )}
            <h3>Your Items</h3>
            {items.length === 0 ? (
                <p>You have no items listed.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            <div>
                                <strong>{item.description}</strong><br />
                                Size: {item.size}<br />
                                Color: {item.color}<br />
                                Condition: {item.condition}<br />
                                Availability: {item.availability}<br />
                                <Link to={`/items/edit/${item._id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Profile;
