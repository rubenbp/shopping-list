import { Product } from '../../model/product'
import { updateProduct } from '../../model/product/Product.repository'

export function subtractAmount(listId: string, product: Product) {
  const updatedAmount = (product.amount || 1) - 1

  // 1 item is the minimal amount
  const normalizedAmount = updatedAmount < 1 ? 1 : updatedAmount

  updateProduct(listId, product.id, { amount: normalizedAmount })
}
