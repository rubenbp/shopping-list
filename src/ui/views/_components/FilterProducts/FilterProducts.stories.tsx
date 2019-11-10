import * as React from 'react'
import { FilterProducts } from './FilterProducts'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterProducts',
  component: FilterProducts,
}

export const index = () => <FilterProducts onSearch={action('onSearch')} />
