import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { login } from '../../core/actions/auth'
import { logout } from '../../core/actions/auth/logout'
import { useSession } from '../hooks/useSession'
import { ProductList } from './ProductList'
import { LoadingView } from './_components/LoadingView'

export const Home = () => {
  const { user, initializing } = useSession()

  if (initializing) {
    return <LoadingView />
  }

  if (!user) {
    return (
      <span onClick={() => login()} style={{ position: 'relative', zIndex: 1 }}>
        Login
      </span>
    )
  }

  return (
    <Switch>
      <Route path="/">
        <span onClick={() => logout()}>Logout</span>
        <ProductList />
      </Route>
    </Switch>
  )
}
