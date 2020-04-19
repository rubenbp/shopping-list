import firebase from 'firebase/app'
import React, { useState } from 'react'
import { getCurrentUser, onAuthStateChanged } from '../infraestructure/auth'

export const SessionContext = React.createContext<{
  user: firebase.User | null
  initializing: boolean
}>({
  user: null,
  initializing: true,
})

export const SessionProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(() => {
    const user = getCurrentUser()
    return { initializing: !user, user }
  })

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = onAuthStateChanged((user) => {
      setState({ initializing: false, user })
    })
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return (
    <SessionContext.Provider value={state}>{children}</SessionContext.Provider>
  )
}
