import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="text">
                <h1>Feeling the urge to drive <span className="highlight">fast?</span></h1>
                <p>Get access to your dream car anytime and anywhere by booking with us!</p>
                <Link to="/cars">
                    <button>View Cars</button>
                </Link>
            </div>
            <img src={"/images/car1.png"} alt="Luxury Car" className="mainImage" />
        </div>
    );
}

export default Home;