import { useEffect, useState } from 'react'
import { getDBConnection } from '../infraestructure/firebase'

export interface Item {
  id: string
  name: string
  amount: number
}

export const useItems = () => {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    console.log('effect')

    const fetchData = async () => {
      const db = await getDBConnection()

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
    }

    fetchData()
  }, [])
  return items
}
