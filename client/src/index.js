import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootReducer} from "./redux/reducers"
import  {BrowserRouter as Router } from 'react-router-dom'
import {applyMiddleware,createStore,compose} from "redux"
import reduxThunk from "redux-thunk"
import promiseMiddleware from "redux-promise"
import {Provider} from "react-redux"
//HERE WE APPLY SOME MIDDLEWARE TO THE REDUX CREATESTORE WHICH
// promiseMiddleware hold the process until the promise is render 
// and reduxThunk help to use functions ash actioncreate not only action objects
const createStoreWithMiddlewares=applyMiddleware(promiseMiddleware,reduxThunk)(createStore)


ReactDOM.render(
  <Provider store={
    createStoreWithMiddlewares(
      rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>

    <App/>
  </Provider>
  , document.getElementById('root'));
// ReactDOM.render(
//     <ContextProvider><Router><App/></Router></ContextProvider>,document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

