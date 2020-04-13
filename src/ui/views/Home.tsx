import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { Login } from './Login'
import { NewList } from './NewList'
import { ProductList } from './ProductList'
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
    <Switch>
      <Route path="/new-list">
        <NewList />
      </Route>
      <Route path="/lists/:listId" children={<ProductList />} />
      <Route path="/">Listado de listas</Route>
    </Switch>
  )
}
