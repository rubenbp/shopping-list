import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { FilterProducts } from './FilterProducts'

export default {
  title: 'FilterProducts',
  component: FilterProducts,
}

export const index = () => (
  <FilterProducts
    term="demo"
    onSearch={action('onSearch')}
    onAdd={action('onAdd')}
  />
)
