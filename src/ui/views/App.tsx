import React from 'react'
import { useItems } from './useItems'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ItemLine } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'

export const App: React.FC = () => {
  const { checkedItems, uncheckedItems, loading } = useItems()

  if (loading) {
    return (
      <>
        <GlobalStyles />
        <div>Loading...</div>
      </>
    )
  }

  return (
    <>
      <GlobalStyles />

      {uncheckedItems.map(item => (
        <ItemLine item={item} key={item.id} />
      ))}

      {checkedItems && (
        <>
          <Separator />
          {checkedItems.map(item => (
            <ItemLine item={item} key={item.id} />
          ))}
        </>
      )}
    </>
  )
}
