import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './infraestructure/UserContext'
import './theme/index.css'
import { AppBase } from './views/AppBase'

export const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <AppBase />
      </Router>
    </UserProvider>
  )
}
