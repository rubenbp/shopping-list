import firebase from 'firebase/app'
import 'firebase/auth'
import React, { useState } from 'react'

export const UserContext = React.createContext<{
  user: firebase.User | null
  initializing: boolean
}>({
  user: null,
  initializing: true,
})

export const UserProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser
    return { initializing: !user, user }
  })

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setState({ initializing: false, user })
    })
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
}
