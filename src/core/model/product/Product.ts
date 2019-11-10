export interface Product {
  id: string
  name: string
  amount: number
  checked: boolean
}

export const isProductChecked = (item: Product) => item.checked
export const isProductUnchecked = (item: Product) => !item.checked

export const sortProductsAlphabetical = (itemA: Product, itemB: Product) =>
  itemA.name.localeCompare(itemB.name)
