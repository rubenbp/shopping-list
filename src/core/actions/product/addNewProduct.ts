import { NewProduct } from '../../model/product'
import { addProduct } from '../../model/product/Product.repository'

/**
 * Añade un nuevo producto a la lista
 * @returns Identificador del producto añadido
 */
export async function addNewProduct(
  listId: string,
  name: string,
  amount: number,
) {
  const newProduct: NewProduct = {
    name,
    amount: amount,
    checked: false,
  }

  const productRef = await addProduct(listId, newProduct)
  return productRef.id
}
