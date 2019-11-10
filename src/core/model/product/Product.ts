export interface Product extends NewProduct {
  id: string
}

export interface NewProduct {
  name: string
  amount: number
  checked: boolean
}

export const isProductChecked = (item: Product) => item.checked
export const isProductUnchecked = (item: Product) => !item.checked

export const sortProductsAlphabetical = (itemA: Product, itemB: Product) =>
  itemA.name.localeCompare(itemB.name)
