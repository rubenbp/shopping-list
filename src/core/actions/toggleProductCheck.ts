import { Product } from '../model/product/Product'
import { updateProduct } from '../model/product/Product.repository'

export const toggleProductCheck = (product: Product) => {
  const nextCheckedState = !product.checked
  updateProduct(product.id, { checked: nextCheckedState })
}
