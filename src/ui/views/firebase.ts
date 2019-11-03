import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCd6Namyqy3GB2uAcfpRPQrXmQMm15lcq8',
  authDomain: 'rbp-shopping-list-v2.firebaseapp.com',
  databaseURL: 'https://rbp-shopping-list-v2.firebaseio.com',
  projectId: 'rbp-shopping-list-v2',
  storageBucket: 'rbp-shopping-list-v2.appspot.com',
  messagingSenderId: '485085487837',
  appId: '1:485085487837:web:ba7bccf1e2c7db7b343134',
  measurementId: 'G-DTGXPEE8SL',
}

export const initFirebaseApp = () => {
  firebase.initializeApp(firebaseConfig)
}

export const getDBConnection = () => {
  return firebase.firestore()
}
