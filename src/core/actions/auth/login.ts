import firebase from 'firebase/app'
import 'firebase/auth'

export function login() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}
