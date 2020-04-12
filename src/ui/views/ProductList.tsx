import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addAmount } from '../../core/actions/addAmount'
import { addNewProduct } from '../../core/actions/addNewProduct'
import { deleteProduct } from '../../core/actions/deleteProduct'
import { subtractAmount } from '../../core/actions/subtractAmount'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { useProducts } from './useProducts'
import { FilterProducts } from './_components/FilterProducts'
import { LoadingView } from './_components/LoadingView'
import { NewProductItem } from './_components/NewProductItem'
import { ProductItem } from './_components/ProductItem/ProductItem'

export const ProductList: React.FC = () => {
  const { listId = '' } = useParams()
  const { checkedProducts, uncheckedProducts, loading } = useProducts(listId)
  const [term, setTerm] = useState('')

  const handleSearch = (term: string): void => {
    setTerm(term)
  }

  if (loading) {
    return <LoadingView />
  }

  const checkedProductsFiltered = checkedProducts.filter(
    (p) => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )
  const uncheckedProductFiltered = uncheckedProducts.filter(
    (p) => p.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  )

  const handleAddProduct = () => {
    addNewProduct(listId, term)
    setTerm('')
  }

  const hasProductFiltered =
    checkedProductsFiltered.length > 0 || uncheckedProductFiltered.length > 0

  return (
    <>
      {uncheckedProductFiltered.map((product) => (
        <ProductItem
          item={product}
          key={product.id}
          onToggleCheck={() => toggleProductCheck(listId, product)}
          onDelete={() => deleteProduct(listId, product.id)}
          onAddAmount={() => addAmount(listId, product)}
          onSubtractAmount={() => subtractAmount(listId, product)}
        />
      ))}

      {checkedProductsFiltered.length > 0 && (
        <>
          {checkedProductsFiltered.map((product) => (
            <ProductItem
              item={product}
              key={product.id}
              onToggleCheck={() => toggleProductCheck(listId, product)}
              onDelete={() => deleteProduct(listId, product.id)}
              onAddAmount={() => addAmount(listId, product)}
              onSubtractAmount={() => subtractAmount(listId, product)}
            />
          ))}
        </>
      )}

      {!hasProductFiltered && (
        <NewProductItem name={term} onAdd={handleAddProduct} />
      )}

      <FilterProducts term={term} onSearch={handleSearch} />
    </>
  )
}
