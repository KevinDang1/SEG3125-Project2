import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Choose from './Choose';
import Contact from './Contact';
import Works from './Works';
import Cars from './Cars';
import Book from './Book'; 
import Confirmation from './Confirmation';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/choose" element={<Choose />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/book" element={<Book />} /> 
                        <Route path="/confirmation" element={<Confirmation />} /> 
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
