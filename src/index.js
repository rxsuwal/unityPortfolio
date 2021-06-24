import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import infoReducer from './store/reducer/information'
import portfolioReducer from './store/reducer/portfolio'
import servicesReducer from './store/reducer/services'
import messageReducer from './store/reducer/message'
import socialLinkReducer from './store/reducer/socialLink'
import { applyMiddleware, combineReducers, createStore,compose } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

  info : infoReducer,
  services : servicesReducer,
  portfolio : portfolioReducer,
  message : messageReducer,
  socialLink : socialLinkReducer

})

const logger = store =>{
  return next =>{
      return action =>{
          console.log('Middleware Dispatching..', action);
          const result = next(action);
          console.log("Middleware next state", store.getState())
          return result
 
      }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)))


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
