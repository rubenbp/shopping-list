import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './infraestructure/UserContext'
import { GlobalStyles } from './theme/GlobalStyles'
import './theme/index.css'
import { Home } from './views/Home'

export const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <CssBaseline />
        <GlobalStyles />
        <Home />
      </Router>
    </UserProvider>
  )
}
