import { getDBConnection } from '../../infraestructure/firebase'

export interface ItemsList {
  id: string
  name: string
}

export async function getLists(callback: (lists: ItemsList[]) => void) {
  const db = await getDBConnection()
  db.collection('lists').onSnapshot((snapshot) => {
    const lists: ItemsList[] = []
    snapshot.forEach((doc) => {
      const data = doc.data()
      lists.push({
        id: doc.id,
        name: data.name,
      })
    })

    callback(lists)
  })
}
