import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from '@components/App';

import { projects } from './projects';
import locales from './locales';

import './general.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

const app = <App locale={locales} projects={projects} />;

if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
} else {
    createRoot(rootElement).render(app);
}
