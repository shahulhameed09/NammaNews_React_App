import React from 'react'
import load from './Ripple-1s-200px.gif'

const loading = () => {
    return (
      <div className='text-center mb-5'>
        <img src={load} alt="loading" />
      </div>
    )
}

export default loading;