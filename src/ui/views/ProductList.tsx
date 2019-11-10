import React, { useState } from 'react'
import { useProducts } from './useProducts'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { deleteProduct } from '../../core/actions/deleteProduct'
import { addAmount } from '../../core/actions/addAmount'
import { subtractAmount } from '../../core/actions/subtractAmount'
import { FilterProducts } from './_components/FilterProducts'

export const ProductList: React.FC = () => {
  const { checkedProducts, uncheckedProducts, loading } = useProducts()
  const [term, setTerm] = useState('')

  const handleSearch = (term: string) => {
    setTerm(term)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  const checkedProductsFiltered = checkedProducts.filter(
    p => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )
  const uncheckedProductFiltered = uncheckedProducts.filter(
    p => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )

  return (
    <>
      {uncheckedProductFiltered.map(product => (
        <ProductItem
          item={product}
          key={product.id}
          onToggleCheck={() => toggleProductCheck(product)}
          onDelete={() => deleteProduct(product.id)}
          onAddAmount={() => addAmount(product)}
          onSubtractAmount={() => subtractAmount(product)}
        />
      ))}

      {checkedProductsFiltered.length > 0 && (
        <>
          {uncheckedProductFiltered.length > 0 && <Separator />}
          {checkedProductsFiltered.map(product => (
            <ProductItem
              item={product}
              key={product.id}
              onToggleCheck={() => toggleProductCheck(product)}
              onDelete={() => deleteProduct(product.id)}
              onAddAmount={() => addAmount(product)}
              onSubtractAmount={() => subtractAmount(product)}
            />
          ))}
        </>
      )}

      <FilterProducts term={term} onSearch={handleSearch} />
    </>
  )
}
