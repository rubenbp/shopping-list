import React from 'react'
import { useProducts } from './useProducts'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { deleteProduct } from '../../core/actions/deleteProduct'

export const ProductList: React.FC = () => {
  const { checkedProducts, uncheckedProducts, loading } = useProducts()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {uncheckedProducts.map(product => (
        <ProductItem
          item={product}
          key={product.id}
          onToggleCheck={() => toggleProductCheck(product)}
          onDelete={() => deleteProduct(product.id)}
        />
      ))}

      {checkedProducts && (
        <>
          <Separator />
          {checkedProducts.map(product => (
            <ProductItem
              item={product}
              key={product.id}
              onToggleCheck={() => toggleProductCheck(product)}
              onDelete={() => deleteProduct(product.id)}
            />
          ))}
        </>
      )}
    </>
  )
}