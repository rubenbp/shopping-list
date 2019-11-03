import * as firebase from 'firebase/app'
import 'firebase/firestore'
import React, { useEffect, useState } from 'react'

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

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

interface Item {
  id: string
  name: string
  amount: number
}

export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    console.log('effect')
    db.collection('items').onSnapshot(querySnapshot => {
      const newItems: Item[] = []
      querySnapshot.forEach(doc => {
        newItems.push({
          id: doc.id,
          name: doc.data().name,
          amount: doc.data().amount,
        })
      })
      setItems(newItems)
    })
  }, [])

  return (
    <>
      {!items && <div>Loading...</div>}
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
