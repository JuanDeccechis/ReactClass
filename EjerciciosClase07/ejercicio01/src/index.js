import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginManager from './LoginManager';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginManager />, document.getElementById('root'));
registerServiceWorker();
