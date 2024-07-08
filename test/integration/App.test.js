import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

test('renders the Home component when the path is "/"', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    // Verifica que el componente Home está presente en el DOM
    const homeElement = screen.getByText(/welcome to home/i); // Ajusta esto según el contenido real de Home
    expect(homeElement).toBeInTheDocument();
});
