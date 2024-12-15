import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { Login } from './pages';
import { Register } from './pages';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default App;