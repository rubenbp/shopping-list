import { NewProduct } from '../model/product'
import { addProduct } from '../model/product/Product.repository'

export function addNewProduct(listId: string, name: string) {
  const newProduct: NewProduct = {
    name,
    amount: 1,
    checked: false,
  }

  addProduct(listId, newProduct)
}
