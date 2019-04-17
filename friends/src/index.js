import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { reducer } from './reducers';

const store = createStore(reducer);

ReactDOM.render(
<Router>
    <App store={store} />
</Router>
, document.getElementById('root'));

