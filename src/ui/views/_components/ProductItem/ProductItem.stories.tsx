import * as React from 'react'
import { ItemLine } from './ProductItem'
import { Product } from '../../../../core/model/product/Product'

export default {
  title: 'ProductItem',
  component: ItemLine,
}

const item: Product = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: false,
}

export const index = () => <ItemLine item={item}></ItemLine>
