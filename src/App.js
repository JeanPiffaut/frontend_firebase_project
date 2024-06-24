import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { LoadingProvider } from './components/LoadingScreen';
import { useTranslation } from 'react-i18next';

function App() {
    useTranslation();

    return (
        <LoadingProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </LoadingProvider>
    );
}

export default App;
