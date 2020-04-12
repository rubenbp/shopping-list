import { getDBConnection } from '../../infraestructure/firebase'
import { NewProduct, Product } from './Product'

type Callback = (items: Product[]) => void

export async function getProducts(listId: string, callback: Callback) {
  const db = await getDBConnection()

  db.collection('lists')
    .doc(listId)
    .collection('items')
    .onSnapshot((querySnapshot) => {
      const items = queryToItems(querySnapshot)
      callback(items)
    })
}

function queryToItems(query: firebase.firestore.QuerySnapshot) {
  const newItems: Product[] = []

  query.forEach((doc) => {
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

export async function updateProduct(
  listId: string,
  productId: string,
  fields: object,
) {
  const db = await getDBConnection()
  return db
    .collection('lists')
    .doc(listId)
    .collection('items')
    .doc(productId)
    .update(fields)
}

export async function deleteProduct(listId: string, productId: string) {
  const db = await getDBConnection()
  return db
    .collection('lists')
    .doc(listId)
    .collection('items')
    .doc(productId)
    .delete()
}

export async function addProduct(listId: string, product: NewProduct) {
  const db = await getDBConnection()
  return db.collection('lists').doc(listId).collection('items').add(product)
}
