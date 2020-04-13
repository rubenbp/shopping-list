import { getDBConnection } from '../../infraestructure/firebase'

export interface NewList {
  name: string
  sharedWidth: string
}

export async function addNewList(currentUser: firebase.User, newList: NewList) {
  const db = await getDBConnection()
  const editors: string[] = [currentUser.email!]

  if (newList.sharedWidth.length > 0) {
    newList.sharedWidth.split('\n').forEach((email) => {
      editors.push(email)
    })
  }

  return db.collection('lists').add({
    name: newList.name,
    owner: currentUser.uid,
    editors,
  })
}
