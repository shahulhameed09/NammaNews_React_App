import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 7
  state={
      progress : 0
    }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  apiKey = process.env.API_KEY

  render() {
    return (
      <BrowserRouter>
        <LoadingBar color='red' height={3} progress={this.state.progress} />
        <NavBar />
        <Routes>
          <Route index element={<News setProgress={this.setProgress} key='General' pageSize={this.pageSize} country="in" category="general"  apiKey={this.apiKey} />} />
          <Route path='Business' element={<News setProgress={this.setProgress} key='Business' pageSize={this.pageSize} country="in" category="business"  apiKey={this.apiKey} />} />
          <Route path='Entertainment' element={<News setProgress={this.setProgress} key='Entertainment' pageSize={this.pageSize} country="in" category="entertainment"  apiKey={this.apiKey} />} />
          <Route path='Health' element={<News setProgress={this.setProgress} key='Health' pageSize={this.pageSize} country="in" category="health"  apiKey={this.apiKey} />} />
          <Route path='Science' element={<News setProgress={this.setProgress} key='Science' pageSize={this.pageSize} country="in" category="science"  apiKey={this.apiKey} />} />
          <Route path='Sports' element={<News setProgress={this.setProgress} key='Sports' pageSize={this.pageSize} country="in" category="sports"  apiKey={this.apiKey} />} />
          <Route path='Technology' element={<News setProgress={this.setProgress} key='Technology' pageSize={this.pageSize} country="in" category="technology"  apiKey={this.apiKey} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
