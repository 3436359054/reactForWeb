import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import store from '../store'
import {Provider} from 'react-redux'
import {View as CommonWrapper} from '../components/commonWrapper/'
import 'whatwg-fetch'
import "babel-polyfill"
import '../reset.css'
import './style.css'
export default class App extends Component {
  render () {
    return (
        <div className='main'>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path='/' component={CommonWrapper}></Route>
            </Router>
          </Provider>
        </div>
    )
  }
}