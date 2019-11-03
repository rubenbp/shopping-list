import { useEffect, useState } from 'react'
import { getDBConnection } from './firebase'

export interface Item {
  id: string
  name: string
  amount: number
}

export const useItems = () => {
  const db = getDBConnection()
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
  }, [db])
  return items
}
