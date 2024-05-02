import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MUserLogin from '../pages/Mobile user login/MUserLogin';

const RoutesConfig = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/mobileloginuser" element={<MUserLogin />} />
        </Routes>
    );
};

export default RoutesConfig;
