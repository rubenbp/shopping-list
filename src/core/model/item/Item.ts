export interface Item {
  id: string
  name: string
  amount: number
  checked: boolean
}

export const isItemChecked = (item: Item) => item.checked
export const isItemUnchecked = (item: Item) => !item.checked
