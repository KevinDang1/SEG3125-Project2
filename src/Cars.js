import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { IoPeople } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { TbManualGearboxFilled } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";

const Cars = () => {
    const navigate = useNavigate();

    const carList = [
        { name: "Lamborghini Urus", price: "$1,500/day", rating: "4.3 (1250 reviews)", passengers: "5 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/urus.png` },
    { name: "Porsche 911 Turbo S", price: "$1,750/day", rating: "4.8 (1436 reviews)", passengers: "2 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/turboS.png` },
    { name: "McLaren 765LT Spider", price: "$1,650/day", rating: "4.5 (1783 reviews)", passengers: "2 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/765s.png` },
    { name: "Nissan R35 GTR Premium", price: "$900/day", rating: "4.1 (1336 reviews)", passengers: "2 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/gtr.png` },
    { name: "Rolls-Royce Ghost", price: "$2,500/day", rating: "5.0 (2036 reviews)", passengers: "5 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/rolls.png` },
    { name: "BMW M5 CS", price: "$850/day", rating: "4.4 (1433 reviews)", passengers: "5 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/m5cs.png` },
    { name: "Mercedes-Benz Sprinter", price: "$2,000/day", rating: "4.3 (892 reviews)", passengers: "15 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/van.png` },
    { name: "Lamborghini Huracan", price: "$1,000/day", rating: "4.0 (1203 reviews)", passengers: "2 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/huracan.png` },
    { name: "Ferrari 458 Italia", price: "$1,450/day", rating: "4.6 (1316 reviews)", passengers: "2 Passengers", transmission: "Auto", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/458.png` },
    { name: "Lamborghini Murcielago LP640", price: "$2,000/day", rating: "5.0 (1141 reviews)", passengers: "2 Passengers", transmission: "Manual", airConditioning: "No Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/murci.png` }
    ];

    const handleRentNowClick = (car) => {
        navigate("/book", { state: { car } });
    };

    return (
        <div>
            <div className='centerText'>
                <h1>All Available Cars</h1>
            </div>
            <div className="cars-page">
                <div className="filters">
                    <h3>Filter(s)</h3>
                    <div className="filter-category">
                        <h4>Car Type</h4>
                        <ul>
                            <li><input type="checkbox" /> Luxury</li>
                            <li><input type="checkbox" /> Sport</li>
                            <li><input type="checkbox" /> Convertible</li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>Transmission</h4>
                        <ul>
                            <li><input type="checkbox" /> Manual</li>
                            <li><input type="checkbox" /> Automatic</li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>Car Manufactuer</h4>
                        <ul>
                            <li><input type="checkbox" /> BMW</li>
                            <li><input type="checkbox" /> Ferrari</li>
                            <li><input type="checkbox" /> Lamborghini</li>
                            <li><input type="checkbox" /> McLaren</li>
                            <li><input type="checkbox" /> Mercedes-Benz</li>
                            <li><input type="checkbox" /> Nissan</li>
                            <li><input type="checkbox" /> Porsche</li>
                            <li><input type="checkbox" /> Rolls-Royce</li>
                        </ul>
                    </div>
                </div>
                <div className="cars-container">
                    <div className="cars-grid">
                        {carList.map((car, index) => (
                            <div className="car-card" key={index}>
                                <img src={car.image} alt={car.name} />
                                <h2>{car.name}</h2>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span>{car.rating}</span>
                                </div>
                                <div className="car-details">
                                    <div><IoPeople className="caricon" /> {car.passengers}</div>
                                    <div><TbManualGearboxFilled className="caricon" /> {car.transmission}</div>
                                    <div><FaRegSnowflake /> {car.airConditioning}</div>
                                    <div><GiCarDoor className="caricon" /> {car.doors}</div>
                                </div>
                                <p className="price">{car.price}</p>
                                <button className="rent-button" onClick={() => handleRentNowClick(car)}>Rent Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cars;
