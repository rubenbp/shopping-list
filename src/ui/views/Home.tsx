import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { Login } from './Login'
import { NewList } from './NewList'
import { ProductList } from './ProductList'
import { AppBar } from './_components/AppBar'
import { LoadingView } from './_components/LoadingView'

export const Home = () => {
  const { user, initializing } = useSession()

  if (initializing) {
    return <LoadingView />
  }

  if (!user) {
    return <Login />
  }

  return (
    <AppBar>
      <Switch>
        <Route path="/new-list">
          <NewList />
        </Route>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </AppBar>
  )
}
