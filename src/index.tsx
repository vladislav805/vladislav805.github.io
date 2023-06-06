import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@components/App';

import projects from './projects';
import locales from './locales';

import './general.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const app = <App locale={locales} projects={projects} />;

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, app);
} else {
    ReactDOM.createRoot(rootElement).render(app);
}
