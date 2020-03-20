import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './general.scss';
import App from './components/App';
import locales from './locales';

ReactDOM.render(<App locale={locales} />, document.getElementById('root'));
