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
      setItems({
        checkedItems: items.filter(isItemChecked).sort(sortItemsAlphabetical),
        uncheckedItems: items
          .filter(isItemUnchecked)
          .sort(sortItemsAlphabetical),
        loading: false,
      })
    })
  }, [])

  return items
}
