import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () =>{ 
  const pageSize = 7
  const [state, setState]= useState({
      progress : 0
    })
  const setProgress = (progress) => {
    setState({progress:progress})
  }

  const apiKey = process.env.API_KEY

    return (
      <BrowserRouter>
        <LoadingBar color='red' height={3} progress={state.progress} />
        <NavBar />
        <Routes>
          <Route index element={<News setProgress={setProgress} key='General' pageSize={pageSize} country="in" category="general"  apiKey={apiKey} />} />
          <Route path='Business' element={<News setProgress={setProgress} key='Business' pageSize={pageSize} country="in" category="business"  apiKey={apiKey} />} />
          <Route path='Entertainment' element={<News setProgress={setProgress} key='Entertainment' pageSize={pageSize} country="in" category="entertainment"  apiKey={apiKey} />} />
          <Route path='Health' element={<News setProgress={setProgress} key='Health' pageSize={pageSize} country="in" category="health"  apiKey={apiKey} />} />
          <Route path='Science' element={<News setProgress={setProgress} key='Science' pageSize={pageSize} country="in" category="science"  apiKey={apiKey} />} />
          <Route path='Sports' element={<News setProgress={setProgress} key='Sports' pageSize={pageSize} country="in" category="sports"  apiKey={apiKey} />} />
          <Route path='Technology' element={<News setProgress={setProgress} key='Technology' pageSize={pageSize} country="in" category="technology"  apiKey={apiKey} />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;