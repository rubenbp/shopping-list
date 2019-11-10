import { useEffect, useState } from 'react'
import {
  Item,
  isItemChecked,
  isItemUnchecked,
  sortItemsAlphabetical,
} from '../../core/model/item'
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
      const checkedItems = items
        .filter(isItemChecked)
        .sort(sortItemsAlphabetical)

      const uncheckedItems = items
        .filter(isItemUnchecked)
        .sort(sortItemsAlphabetical)

      setItems({
        checkedItems,
        uncheckedItems,
        loading: false,
      })
    })
  }, [])

  return items
}
