import React, {Component} from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import store from '../store'
import {Provider} from 'react-redux'
import {View as CommonWrapper} from '../components/commonWrapper/'
import {View as Home} from '../pages/Home'
import {View as Details} from '../pages/Details'
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
              <Route path='/' component={CommonWrapper}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path='details/:id' component={Details}></Route>
              </Route>
            </Router>
          </Provider>
        </div>
    )
  }
}