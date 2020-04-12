import { useEffect, useState } from 'react'
import { getProducts } from '../../core/actions/getProducts'
import {
  isProductChecked,
  isProductUnchecked,
  Product,
  sortProductsAlphabetical,
} from '../../core/model/product'

interface ProductsList {
  checkedProducts: Product[]
  uncheckedProducts: Product[]
  loading: boolean
}

export const useProducts = (listId: string) => {
  const [products, setProducts] = useState<ProductsList>({
    checkedProducts: [],
    uncheckedProducts: [],
    loading: true,
  })

  useEffect(() => {
    getProducts(listId, (items) => {
      const checkedProducts = items
        .filter(isProductChecked)
        .sort(sortProductsAlphabetical)

      const uncheckedItems = items
        .filter(isProductUnchecked)
        .sort(sortProductsAlphabetical)

      setProducts({
        checkedProducts: checkedProducts,
        uncheckedProducts: uncheckedItems,
        loading: false,
      })
    })
  }, [listId])

  return products
}
