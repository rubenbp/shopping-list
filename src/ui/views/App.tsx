import React from 'react'
import { useItems } from './useItems'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ProductItem } from './_components/ProductItem/ProductItem'
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
        <ProductItem
          item={item}
          key={item.id}
          onToggleCheck={() => console.log('toggle', item)}
          onDelete={() => console.log('delete', item)}
        />
      ))}

      {checkedItems && (
        <>
          <Separator />
          {checkedItems.map(item => (
            <ProductItem
              item={item}
              key={item.id}
              onToggleCheck={() => console.log('toggle', item)}
              onDelete={() => console.log('delete', item)}
            />
          ))}
        </>
      )}
    </>
  )
}
