import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; // First step of project
import allReducers from './reducers/index.js' //This is all of the reducers
import { Provider } from 'react-redux'

const store = createStore(allReducers); // This will be the store of state

ReactDOM.render(
//The use of the provider is to allow components access to the store
    <Provider store={store}> 
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister(); // Boilerplate
