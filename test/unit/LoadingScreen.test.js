import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from '../../src/components/LoadingScreen';

test('renders LoadingScreen component correctly', () => {
    const { getByText } = render(<LoadingScreen />);
    expect(getByText(/Loading/i)).toBeInTheDocument();
});
