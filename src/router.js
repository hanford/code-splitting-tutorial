import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Bundle from './bundle'

import LoadA from 'bundle-loader?lazy&!./pages/a'
import LoadB from 'bundle-loader?lazy&name=[name]!./pages/b'

import Home from './pages/home'

const A = () => (
  <Bundle load={LoadA}>
    {(A) => A ? <A /> : null}
  </Bundle>
)

const B = () => (
  <Bundle load={LoadB}>
    {(B) => B ? <B /> : null}
  </Bundle>
)

export class myRouter extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/a' component={A} />
          <Route path='/b' component={B} />
          <Route exact path='/' component={Home}/>
        </div>
      </Router>
    )
  }
}

export default myRouter
