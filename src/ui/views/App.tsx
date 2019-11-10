import React from 'react'
import { useProducts } from './useProducts'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'

export const App: React.FC = () => {
  const {
    checkedProducts: checkedItems,
    uncheckedProducts: uncheckedItems,
    loading,
  } = useProducts()

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
