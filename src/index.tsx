import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './general.scss';
import App from './components/App';
import locales from './locales';

const rootElement = document.getElementById('root');
const app = <App locale={locales} />;

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(app, rootElement);
} else {
    ReactDOM.render(app, rootElement);
}
