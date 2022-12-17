import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import locales from './locales';
import './general.scss';

const rootElement = document.getElementById('root');
const app = <App locale={locales} />;

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, app);
} else {
    ReactDOM.createRoot(rootElement).render(app);
}
