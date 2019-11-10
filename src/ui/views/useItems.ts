import { useEffect, useState } from 'react'
import { Item } from '../../core/model/item/Item'
import { getItems } from '../../core/actions/getItems'

interface ItemsList {
  checkedItems: Item[]
  uncheckedItems: Item[]
  loading: boolean
}

export const useItems = () => {
  const [items, setItems] = useState<ItemsList>({
    checkedItems: [],
    uncheckedItems: [],
    loading: true,
  })

  useEffect(() => {
    getItems(items => {
      setItems({
        checkedItems: items.filter(i => i.checked),
        uncheckedItems: items.filter(i => !i.checked),
        loading: false,
      })
    })
  }, [])

  return items
}
