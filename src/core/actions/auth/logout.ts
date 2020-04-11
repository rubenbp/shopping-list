import firebase from 'firebase/app'
import 'firebase/auth'

export function logout() {
  firebase.auth().signOut()
}
