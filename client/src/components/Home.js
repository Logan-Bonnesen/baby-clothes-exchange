import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Baby Clothes Exchange</h1>
                <p>Find or exchange baby clothes with other parents. Easy, quick, and reliable.</p>
                {user ? (
                    <h2>Hello, {user.name}!</h2>
                ) : (
                    <Link to="/register">
                        <button>Get Started</button>
                    </Link>
                )}
            </section>
            <section className="features">
                <div className="feature">
                    <h2>Browse Listings</h2>
                    <p>Explore a variety of baby clothes available for sale or trade.</p>
                </div>
                <div className="feature">
                    <h2>Post Your Items</h2>
                    <p>List your baby clothes easily and connect with other parents.</p>
                </div>
                <div className="feature">
                    <h2>Connect with Others</h2>
                    <p>Engage with other users.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
