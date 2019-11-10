import * as React from 'react'
import { ItemLine } from './ProductItem'
import { Product } from '../../../../core/model/product/Product'

export default {
  title: 'ProductItem',
  component: ItemLine,
}

const uncheckedItem: Product = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: false,
}

const checkedItem = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: true,
}

export const checked = () => <ItemLine item={checkedItem}></ItemLine>
export const unchecked = () => <ItemLine item={uncheckedItem}></ItemLine>
