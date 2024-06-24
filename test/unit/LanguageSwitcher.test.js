import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import LanguageSwitcher from '../../src/components/LanguageSwitcher';

test('renders LanguageSwitcher component and switches language', () => {
    const {getByText} = render(<LanguageSwitcher/>);
    const englishButton = getByText(/English/i);
    const spanishButton = getByText(/Español/i);

    expect(englishButton).toBeInTheDocument();
    expect(spanishButton).toBeInTheDocument();

    fireEvent.click(spanishButton);
    expect(getByText(/Español/i)).toBeInTheDocument();

    fireEvent.click(englishButton);
    expect(getByText(/English/i)).toBeInTheDocument();
});
