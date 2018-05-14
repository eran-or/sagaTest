import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import AppRouter from './AppRouter'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
//import {ON_QUEUE, FINISH_QUEUE} from 'redux/action-types'

//import {fetchRestaurants} from 'redux/actions/restaurants'

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
