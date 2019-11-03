import * as React from 'react'
import { ItemLine } from './Item'
import { Item } from '../../../../core/model/item/Item'

export default {
  title: 'Item',
  component: ItemLine,
}

const item: Item = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
}

export const index = () => <ItemLine item={item}></ItemLine>
