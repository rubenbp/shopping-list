import { useEffect, useState } from 'react'
import { Item } from '../../core/model/item/Item'
import { getItems } from '../../core/actions/getItems'

export const useItems = () => {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    getItems(setItems)
  }, [])

  return items
}
