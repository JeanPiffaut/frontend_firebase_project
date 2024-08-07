import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { LoadingProvider } from './components/LoadingScreen';

function App() {
    return (
        <LoadingProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </LoadingProvider>
    );
}

export default App;
