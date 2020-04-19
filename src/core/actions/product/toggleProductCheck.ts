import { Product } from '../../model/product/Product'
import { updateProduct } from '../../model/product/Product.repository'

export const toggleProductCheck = (listId: string, product: Product) => {
  const nextCheckedState = !product.checked
  const propsToChange: Partial<Product> = {
    checked: nextCheckedState,
  }

  // Cuando eliminamos el elemento de la lista le quitamos la cantidad
  if (nextCheckedState) {
    propsToChange.amount = 1
  }

  updateProduct(listId, product.id, propsToChange)
}
