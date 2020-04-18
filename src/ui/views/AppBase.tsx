import blueGrey from '@material-ui/core/colors/blueGrey'
import deepPurple from '@material-ui/core/colors/deepPurple'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { useStickyState } from '../hooks/useStickyState'
import { GlobalStyles } from '../theme/GlobalStyles'
import { Home } from './Home'
import { Login } from './Login'
import { NewList } from './NewList'
import { ProductList } from './ProductList'
import { LoadingView } from './_components/LoadingView'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
    text: {
      primary: blueGrey[700],
    },
  },
})

export const AppBase = () => {
  const { user, initializing } = useSession()
  const [defaultList] = useStickyState(null, 'defaultList')
  const history = useHistory()

  useEffect(() => {
    if (!initializing && user && defaultList !== null) {
      history.push(`/lists/${defaultList}`)
    }
  }, [defaultList, history, initializing, user])

  if (initializing) {
    return <LoadingView />
  }

  if (!user) {
    return <Login />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Switch>
        <Route path="/new-list">
          <NewList />
        </Route>
        <Route path="/lists/:listId" children={<ProductList />} />
        <Route path="/" children={<Home />}></Route>
      </Switch>
    </ThemeProvider>
  )
}
