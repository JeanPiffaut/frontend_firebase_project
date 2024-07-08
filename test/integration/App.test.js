import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';
import { HelmetProvider } from 'react-helmet-async';

test('renders the Home component when the path is "/"', () => {
    render(
        <App />
    );

    // Verifica que el componente Home está presente en el DOM
    const homeElement = screen.getByText('Home'); // Ajusta esto según el contenido real de Home
    expect(homeElement).toBeInTheDocument();
});
