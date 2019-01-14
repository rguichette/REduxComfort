import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App.js'
import {changeCurrency} from './Actions'

import reducer from './Reducers/index.js' //rename later

const store = createStore(reducer) //rename later




ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
