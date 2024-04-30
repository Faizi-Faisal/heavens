import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesConfig = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
    );
};

export default RoutesConfig;
