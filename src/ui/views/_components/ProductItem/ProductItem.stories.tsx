import * as React from 'react'
import { ItemLine } from './ProductItem'
import { Item } from '../../../../core/model/item/Item'

export default {
  title: 'ProductItem',
  component: ItemLine,
}

const item: Item = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: false,
}

export const index = () => <ItemLine item={item}></ItemLine>
