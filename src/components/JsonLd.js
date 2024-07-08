import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const JsonLd = ({ basicInfo, extraInfo }) => {
    // Método para combinar la información básica con la extra
    const combineJsonLdData = () => {
        return {
            '@context': 'https://schema.org',
            '@type': basicInfo.type,
            url: basicInfo.url,
            name: basicInfo.name,
            description: basicInfo.description,
            ...extraInfo, // Expande aquí la información extra directamente
        };
    };

    const jsonLdData = combineJsonLdData();

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
        </Helmet>
    );
};

JsonLd.propTypes = {
    basicInfo: PropTypes.shape({
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    extraInfo: PropTypes.object, // Objeto que puede contener cualquier estructura adicional
};

export default JsonLd;
