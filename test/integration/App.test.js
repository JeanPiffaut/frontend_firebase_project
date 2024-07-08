// test/integration/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../src/components/i18n';
import App from '../../src/App';
import { HelmetProvider } from 'react-helmet-async';

test('renders the Home component when the path is "/"', () => {
    render(
        <HelmetProvider>
            <App />
        </HelmetProvider>,
    );

    // Verifica que el componente Home está presente en el DOM
    const editSaveText = screen.getByText(/edit/i); // Busca el texto "Edit" que proviene de la traducción
    expect(editSaveText).toBeInTheDocument();
});
