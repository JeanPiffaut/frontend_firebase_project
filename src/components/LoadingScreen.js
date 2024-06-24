import React, { createContext, useContext, useState } from 'react';
import { t } from 'i18next';

const LoadingContext = createContext({});

export function useLoading() {
    return useContext(LoadingContext);
}

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingType, setLoadingType] = useState('show');

    const showLoading = (type = 'show') => {
        setLoadingType(type);
        setIsLoading(true);
    };
    const hideLoading = () => {
        setIsLoading(false);
        setLoadingType('show');
    };

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
            {isLoading && <LoadingScreen type={loadingType} />}
        </LoadingContext.Provider>
    );
};

const LoadingScreen = ({ type = 'show' }) => {
    const getColor = (type) => {
        switch (type) {
            case 'action':
                return 'text-success';
            case 'show':
                return 'text-primary';
            case 'delete':
                return 'text-danger';
            case 'update':
                return 'text-warning';
            default:
                return 'text-primary';
        }
    };

    return (
        <div className={'loading-screen'}>
            <div className={'spinner-border ' + getColor(type)} role="status">
                <span className="visually-hidden">{t('loading')}</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
