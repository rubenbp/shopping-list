import firebase from 'firebase/app';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useSession } from '../hooks/useSession';
import { LoadingView } from './_components/LoadingView';
import { ProductList } from './ProductList';

export const Home = () => {
  const { user, initializing } = useSession()

  function login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  function logout() {
    firebase.auth().signOut()
  }

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
