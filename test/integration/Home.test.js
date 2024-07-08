import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../src/views/Home';

test('renders Home component correctly', () => {
    render(
        <BrowserRouter>
            <Home
                basicInfo={{
                    name: 'My Website',
                    type: 'WebSite',
                    url: '/'
                }}
            />
        </BrowserRouter>
    );

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    // Verificaciones adicionales para los subcomponentes y la traducción
});
