import logoSVG from '../assets/logo.svg';
import logo from '../assets/logo192.webp';
import meta_image from '../assets/meta-image.png';
import React from 'react';
import { Link } from 'react-router-dom';
import ImageSEO from '../components/ImageSEO';
import MetaTags from '../components/MetaTags';
import JsonLd from '../components/JsonLd';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <JsonLd
                basicInfo={{
                    type: 'WebSide',
                    url: '/',
                    name: t('app_title'),
                    description: t('app_description'),
                }}
            />
            <MetaTags title={t('app_title')} description={t('app_description')} image={meta_image} url={'/'}>
                <link rel="preload" fetchPriority="high" as="image" href={logo} type="image/png" />
            </MetaTags>
            <header className="App-header">
                <ImageSEO
                    defaultSrc={logo}
                    placeholderSrc={logo}
                    height={'192'}
                    width={'192'}
                    alt={'logo'}
                    style={{ width: '100%', height: 'auto', aspectRatio: 192 / 192 }}
                    sources={[{ srcSet: logoSVG, type: 'image/svg+xml' }]}
                    className={'App-logo'}
                    isCritic={true}
                />
                <p>
                    {t('edit_save_1')}
                    <code>src/App.js</code>
                    {t('edit_save_2')}
                </p>
                <Link className="App-link" to="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {t('learn_react')}
                </Link>
            </header>
        </div>
    );
}

export default Home;
