import React from 'react';
import PropTypes from 'prop-types';

const ImageSEO = ({ alt, defaultSrc, sources, width, height, placeholderSrc, style, className, isCritic=false }) => {
    return (
        <picture>
            {sources.map((source, index) => (
                <source key={index} srcSet={source.srcSet} type={source.type} media={source.media ? source.media : undefined} />
            ))}
            <img
                src={placeholderSrc}
                data-src={defaultSrc}
                alt={alt}
                loading={!isCritic ? "lazy" : ""}
                width={width}
                height={height}
                className={className + " " + (!isCritic ? "lazyload" : "")}
                style={style}
            />
        </picture>
    );
};

ImageSEO.propTypes = {
    alt: PropTypes.string.isRequired,
    defaultSrc: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            media: PropTypes.string,
        })
    ).isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    placeholderSrc: PropTypes.string.isRequired,
};

export default ImageSEO;
