import { Product } from './Product'
import { getDBConnection } from '../../infraestructure/firebase'

type Callback = (items: Product[]) => void

export async function getProducts(callback: Callback) {
  const db = await getDBConnection()

  db.collection('items').onSnapshot(querySnapshot => {
    const items = queryToItems(querySnapshot)
    callback(items)
  })
}

function queryToItems(query: firebase.firestore.QuerySnapshot) {
  const newItems: Product[] = []

  query.forEach(doc => {
    newItems.push(buildItem(doc))
  })

  return newItems
}

function buildItem(doc: firebase.firestore.QueryDocumentSnapshot): Product {
  const docData = doc.data()
  return {
    id: doc.id,
    name: docData.name,
    amount: docData.amount,
    checked: docData.checked,
  }
}

export async function updateProduct(productId: string, fields: object) {
  const db = await getDBConnection()
  return db
    .collection('items')
    .doc(productId)
    .update(fields)
}

export async function deleteProduct(productId: string) {
  const db = await getDBConnection()
  return db
    .collection('items')
    .doc(productId)
    .delete()
}
