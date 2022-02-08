import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/views/layout'
import './global.scss'
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<Layout />}/>
        <Route index element={<Navigate to="/home" />} />
      </Routes>
    )
  }
}
export default App