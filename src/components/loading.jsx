import React, { Component } from 'react'
import load from './Ripple-1s-200px.gif'

export default class loading extends Component {
  render() {
    return (
      <div className='text-center mb-5'>
        <img src={load} alt="loading" />
      </div>
    )
  }
}
