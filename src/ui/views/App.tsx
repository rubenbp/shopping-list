import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ProductList } from './ProductList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../../core/infraestructure/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import { LoadingView } from './_components/LoadingView'

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // const displayName = user.displayName;
    // const email = user.email;
    // const emailVerified = user.emailVerified;
    // const photoURL = user.photoURL;
    // const isAnonymous = user.isAnonymous;
    // const uid = user.uid;
    // const providerData = user.providerData;
    // ...
    console.log('Usuario logueado', user)
  } else {
    console.log('Usuario deslogueado')
    authUser()
  }
})

function authUser() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   const user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   const credential = error.credential;
//   // ...
// });

export const App: React.FC = () => (
  <>
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/">
          <LoadingView />
        </Route>
        <Route path="/list">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  </>
)
