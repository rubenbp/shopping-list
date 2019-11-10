import * as React from 'react'
import { ItemLine } from './ItemList'
import { Item } from '../../../../core/model/item/Item'

export default {
  title: 'ItemList',
  component: ItemLine,
}

const item: Item = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: false,
}

export const index = () => <ItemLine item={item}></ItemLine>
