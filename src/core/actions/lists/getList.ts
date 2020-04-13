import { getDBConnection } from '../../infraestructure/firebase'

export interface List {
  id: string
  name: string
}

export async function getList(listId: string): Promise<List> {
  const db = await getDBConnection()
  const list = await db.collection('lists').doc(listId).get()

  return {
    id: list.id,
    name: list.data()?.name,
  }
}
