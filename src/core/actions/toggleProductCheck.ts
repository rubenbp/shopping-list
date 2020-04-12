import { Product } from '../model/product/Product'
import { updateProduct } from '../model/product/Product.repository'

export const toggleProductCheck = (listId: string, product: Product) => {
  const nextCheckedState = !product.checked
  updateProduct(listId, product.id, { checked: nextCheckedState })
}
