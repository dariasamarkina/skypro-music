/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from './components/bar/bar';
import { Main } from './components/main/main';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <Main isLoading={isLoading}/>
        <Bar isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default App