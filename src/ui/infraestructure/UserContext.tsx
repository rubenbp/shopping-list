import firebase from 'firebase/app'
import 'firebase/auth'
import React from 'react'

export const userContext = React.createContext<{
  user: firebase.User | null
  initializing: boolean
}>({
  user: null,
  initializing: true,
})

const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser
    return { initializing: !user, user }
  })

  function onChange(user: firebase.User | null) {
    setState({ initializing: false, user })
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return state
}

export const UserProvider: React.FC = ({ children }) => {
  const { user, initializing } = useAuth()
  return (
    <userContext.Provider value={{ user, initializing }}>
      {children}
    </userContext.Provider>
  )
}
