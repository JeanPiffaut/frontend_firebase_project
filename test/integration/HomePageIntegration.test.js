import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/views/Home';
import { MemoryRouter } from 'react-router-dom';

test('renders Home page with expected content', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to Home/i)).toBeInTheDocument();
});
