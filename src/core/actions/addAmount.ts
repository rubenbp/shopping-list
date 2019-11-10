import { Product } from '../model/product'
import { updateProduct } from '../model/product/Product.repository'

export function addAmount(product: Product) {
  const updatedAmount = (product.amount || 1) + 1
  updateProduct(product.id, { amount: updatedAmount })
}
