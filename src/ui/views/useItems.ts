import { useEffect, useState } from 'react'
import {
  Item,
  isItemChecked,
  isItemUnchecked,
} from '../../core/model/item/Item'
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
        checkedItems: items.filter(isItemChecked),
        uncheckedItems: items.filter(isItemUnchecked),
        loading: false,
      })
    })
  }, [])

  return items
}
