import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import walletsReducer from './reducers/wallets'
//import restaurantsReducer from 'redux/reducers/restaurants'
import api from './middlewares/api'
import queue from './middlewares/queue'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      wallets: walletsReducer
    }),
    composeEnhancers(applyMiddleware(thunk,api,queue))
  )
  return store
}