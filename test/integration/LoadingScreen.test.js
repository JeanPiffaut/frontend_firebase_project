import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { LoadingProvider, useLoading } from '../../src/components/LoadingScreen';

const TestComponent = () => {
    const { showLoading, hideLoading } = useLoading();
    return (
        <div>
            <button onClick={() => showLoading('action')}>Show Loading</button>
            <button onClick={hideLoading}>Hide Loading</button>
        </div>
    );
};

test('shows and hides loading screen', async () => {
    render(
        <LoadingProvider>
            <TestComponent />
        </LoadingProvider>
    );

    // Mostrar la pantalla de carga
    await act(async () => {
        fireEvent.click(screen.getByText('Show Loading'));
    });

    expect(screen.getByRole('status')).toBeInTheDocument();

    // Ocultar la pantalla de carga
    await act(async () => {
        fireEvent.click(screen.getByText('Hide Loading'));
    });

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
});
