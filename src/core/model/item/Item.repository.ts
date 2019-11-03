import { Item } from './Item'
import { getDBConnection } from '../../infraestructure/firebase'

type Callback = (items: Item[]) => void

export async function getItems(callback: Callback) {
  const db = await getDBConnection()

  db.collection('items').onSnapshot(querySnapshot => {
    const items = queryToItems(querySnapshot)
    callback(items)
  })
}

function queryToItems(query: firebase.firestore.QuerySnapshot) {
  const newItems: Item[] = []

  query.forEach(doc => {
    newItems.push(buildItem(doc))
  })

  return newItems
}

function buildItem(doc: firebase.firestore.QueryDocumentSnapshot): Item {
  const docData = doc.data()
  return {
    id: doc.id,
    name: docData.name,
    amount: docData.amount,
  }
}
