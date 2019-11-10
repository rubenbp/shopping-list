import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { NewProductItem } from './NewProductItem'

export default {
  title: 'NewProductItem',
  component: NewProductItem,
}

export const checked = () => (
  <NewProductItem
    name="New product name"
    onAdd={action('onAdd')}
  ></NewProductItem>
)
