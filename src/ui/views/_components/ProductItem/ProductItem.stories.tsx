import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { Product } from '../../../../core/model/product/Product'
import { ProductItem } from './ProductItem'

export default {
  title: 'ProductItem',
  component: ProductItem,
}

const uncheckedProduct: Product = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: false,
}

const checkedProduct = {
  id: '1',
  name: 'Manzanas',
  amount: 1,
  checked: true,
}

export const checked = () => (
  <ProductItem
    item={checkedProduct}
    onToggleCheck={action('onToggleCheck')}
    onDelete={action('onDelete')}
    onSetAmount={action('onSetAmount')}
  ></ProductItem>
)

export const unchecked = () => (
  <ProductItem
    item={uncheckedProduct}
    onToggleCheck={action('onToggleCheck')}
    onDelete={action('onDelete')}
    onSetAmount={action('onSetAmount')}
  ></ProductItem>
)
