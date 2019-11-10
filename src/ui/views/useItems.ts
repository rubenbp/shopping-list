import { useEffect, useState } from 'react'
import {
  Product,
  isProductChecked,
  isProductUnchecked,
  sortProductsAlphabetical,
} from '../../core/model/product'
import { getProducts } from '../../core/actions/getProducts'

interface ItemsList {
  checkedItems: Product[]
  uncheckedItems: Product[]
  loading: boolean
}

export const useItems = () => {
  const [items, setItems] = useState<ItemsList>({
    checkedItems: [],
    uncheckedItems: [],
    loading: true,
  })

  useEffect(() => {
    getProducts(items => {
      const checkedItems = items
        .filter(isProductChecked)
        .sort(sortProductsAlphabetical)

      const uncheckedItems = items
        .filter(isProductUnchecked)
        .sort(sortProductsAlphabetical)

      setItems({
        checkedItems,
        uncheckedItems,
        loading: false,
      })
    })
  }, [])

  return items
}
