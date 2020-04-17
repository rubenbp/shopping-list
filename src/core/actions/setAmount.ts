import { Product } from '../model/product'
import { updateProduct } from '../model/product/Product.repository'

export function setAmount(listId: string, product: Product, amount: number) {
  updateProduct(listId, product.id, { amount: amount })
}
