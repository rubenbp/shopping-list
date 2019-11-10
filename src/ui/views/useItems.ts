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
        checkedItems: items.filter(isItemChecked),
        uncheckedItems: items.filter(isItemUnchecked),
        loading: false,
      })
    })
  }, [])

  return items
}

const isItemChecked = (item: Item) => item.checked
const isItemUnchecked = (item: Item) => !item.checked
