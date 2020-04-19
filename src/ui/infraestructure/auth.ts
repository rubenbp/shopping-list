import firebase from 'firebase'
import 'firebase/auth'

export function onAuthStateChanged(onNext: (a: firebase.User | null) => void) {
  return firebase.auth().onAuthStateChanged(onNext)
}

export function getCurrentUser() {
  return firebase.auth().currentUser
}
