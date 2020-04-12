import { getDBConnection } from '../../infraestructure/firebase'

export interface NewList {
  name: string
  sharedWidth: string
}

export async function addNewList(currentUser: firebase.User, newList: NewList) {
  const db = await getDBConnection()

  const roles = {
    [currentUser.email!]: 'owner',
  }

  if (newList.sharedWidth.length > 0) {
    roles[newList.sharedWidth] = 'editor'
  }

  return db.collection('lists').add({
    name: newList.name,
    roles,
  })
}
