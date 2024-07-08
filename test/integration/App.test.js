import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders Home component on / route', () => {
    render(
        <App />
    );

    expect(screen.getByText('Learn React')).toBeInTheDocument();
});
