import { action } from '@storybook/addon-actions'
import React from 'react'
import { FilterProducts } from './FilterProducts'

export default {
  title: 'FilterProducts',
  component: FilterProducts,
}

export const index = () => {
  return (
    <FilterProducts
      term="demo"
      onSearch={action('onSearch')}
      onAdd={action('onAdd')}
    />
  )
}
