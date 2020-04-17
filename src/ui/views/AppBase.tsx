import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { useStickyState } from '../hooks/useStickyState'
import { Home } from './Home'
import { Login } from './Login'
import { NewList } from './NewList'
import { ProductList } from './ProductList'
import { LoadingView } from './_components/LoadingView'

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
    <Switch>
      <Route path="/new-list">
        <NewList />
      </Route>
      <Route path="/lists/:listId" children={<ProductList />} />
      <Route path="/" children={<Home />}></Route>
    </Switch>
  )
}
