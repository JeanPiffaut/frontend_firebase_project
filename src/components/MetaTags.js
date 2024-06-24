import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description, image, url, children }) => {
    const metaProps = [
        { property: "og:title", content: title },
        { property: "twitter:title", content: title },
        { name: "description", content: description },
        { property: "og:description", content: description },
        { property: "twitter:description", content: description },
        ...(image ? [
            { property: "og:image", content: image },
            { property: "twitter:image", content: image }
        ] : []),
        ...(url ? [
            { property: "og:url", content: url },
            { property: "twitter:url", content: url }
        ] : [])
    ];

    return (
        <Helmet>
            {metaProps.map((meta, index) => (
                <meta key={index} {...meta} />
            ))}
            {children}
        </Helmet>
    );
}

export default MetaTags;
