import React, { useState } from 'react'
import { useProducts } from './useProducts'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { Separator } from './_components/Separator'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { deleteProduct } from '../../core/actions/deleteProduct'
import { addAmount } from '../../core/actions/addAmount'
import { subtractAmount } from '../../core/actions/subtractAmount'
import { FilterProducts } from './_components/FilterProducts'
import { addNewProduct } from '../../core/actions/addNewProduct'
import { NewProductItem } from './_components/NewProductItem'
import { LoadingView } from './_components/LoadingView'

export const ProductList: React.FC = () => {
  const { checkedProducts, uncheckedProducts, loading } = useProducts()
  const [term, setTerm] = useState('')

  const handleSearch = (term: string) => {
    setTerm(term)
  }

  if (loading) {
    return <LoadingView />
  }

  const checkedProductsFiltered = checkedProducts.filter(
    p => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )
  const uncheckedProductFiltered = uncheckedProducts.filter(
    p => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )

  const hasProductFiltered =
    checkedProductsFiltered.length > 0 || uncheckedProductFiltered.length > 0

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

      {!hasProductFiltered && (
        <NewProductItem name={term} onAdd={() => addNewProduct(term)} />
      )}

      <FilterProducts term={term} onSearch={handleSearch} />
    </>
  )
}
