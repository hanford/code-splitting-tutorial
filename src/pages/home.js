import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>Home</h1>
    <Link to='/'>Home</Link>
    <br />
    <Link to='/a'>Component A</Link>
    <br />
    <Link to='/b'>Component B</Link>
  </div>
)
