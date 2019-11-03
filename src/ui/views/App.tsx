import React from 'react'
import { useItems } from './useItems'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ItemLine } from './_components/Item/Item'

export const App: React.FC = () => {
  const items = useItems()

  return (
    <>
      <GlobalStyles />
      {!items && <div>Loading...</div>}
      {items && items.map(item => <ItemLine item={item} key={item.id} />)}
    </>
  )
}
