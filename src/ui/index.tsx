import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { SessionProvider } from './contexts/SessionContext'
import './theme/index.css'
import { AppBase } from './views/AppBase'

export const App: React.FC = () => {
  return (
    <SessionProvider>
      <Router>
        <AppBase />
      </Router>
    </SessionProvider>
  )
}
