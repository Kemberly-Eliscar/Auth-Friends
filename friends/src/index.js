import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'

ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);