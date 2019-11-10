import { useEffect, useState } from 'react'
import {
  Product,
  isProductChecked,
  isProductUnchecked,
  sortProductsAlphabetical,
} from '../../core/model/product'
import { getProducts } from '../../core/actions/getProducts'

interface ProductsList {
  checkedProducts: Product[]
  uncheckedProducts: Product[]
  loading: boolean
}

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsList>({
    checkedProducts: [],
    uncheckedProducts: [],
    loading: true,
  })

  useEffect(() => {
    getProducts(items => {
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
  }, [])

  return products
}
