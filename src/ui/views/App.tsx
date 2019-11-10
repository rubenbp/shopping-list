import React from 'react'
import { useProducts } from './useProducts'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { deleteProduct } from '../../core/actions/deleteProduct'

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
          onToggleCheck={() => toggleProductCheck(item)}
          onDelete={() => deleteProduct(item.id)}
        />
      ))}

      {checkedItems && (
        <>
          <Separator />
          {checkedItems.map(item => (
            <ProductItem
              item={item}
              key={item.id}
              onToggleCheck={() => toggleProductCheck(item)}
              onDelete={() => deleteProduct(item.id)}
            />
          ))}
        </>
      )}
    </>
  )
}
