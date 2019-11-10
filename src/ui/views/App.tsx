import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ProductList } from './ProductList'

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <ProductList />
  </>
)
