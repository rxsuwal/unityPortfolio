import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import infoReducer from './store/reducer/information'
import portfolioReducer from './store/reducer/portfolio'
import servicesReducer from './store/reducer/services'
import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux'

const rootReducer = combineReducers({

  info : infoReducer,
  services : servicesReducer,
  portfolio : portfolioReducer,

})

const store = createStore(rootReducer)


ReactDOM.render(
 <Provider store={store}> 
   <React.StrictMode>
      <App />
    </React.StrictMode>
</Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
