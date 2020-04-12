import { Product } from '../model/product'
import { updateProduct } from '../model/product/Product.repository'

export function addAmount(listId: string, product: Product) {
  const updatedAmount = (product.amount || 1) + 1
  updateProduct(listId, product.id, { amount: updatedAmount })
}
