import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addNewProduct } from '../../core/actions/addNewProduct'
import { deleteProduct } from '../../core/actions/deleteProduct'
import { getList, List } from '../../core/actions/lists'
import { setAmount } from '../../core/actions/setAmount'
import { toggleProductCheck } from '../../core/actions/toggleProductCheck'
import { Product } from '../../core/model/product'
import { useStickyState } from '../hooks/useStickyState'
import { useProducts } from './useProducts'
import { AppBar } from './_components/AppBar'
import { FilterProducts } from './_components/FilterProducts'
import { LoadingView } from './_components/LoadingView'
import { NewProductItem } from './_components/NewProductItem'
import { ProductItem } from './_components/ProductItem/ProductItem'

export const ProductList: React.FC = () => {
  const { listId = '' } = useParams()
  const { checkedProducts, uncheckedProducts, loading } = useProducts(listId)
  const [term, setTerm] = useState('')
  const [currentList, setCurrentList] = useState<List>()
  const [, setDefaultList] = useStickyState(null, 'defaultList')

  // Almacena la lista que está siendo visitada
  useEffect(() => {
    setDefaultList(listId)
  }, [listId, setDefaultList])

  // Obtiene los elementos de la lista
  useEffect(() => {
    getList(listId).then((list) => setCurrentList(list))
  }, [listId])

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

  const handleToggleProductCheck = (product: Product) => {
    toggleProductCheck(listId, product)
    if (product.checked) {
      setTerm('')
    }
  }

  const handleAddProduct = () => {
    addNewProduct(listId, term)
    setTerm('')
  }

  const hasProductFiltered =
    checkedProductsFiltered.length > 0 || uncheckedProductFiltered.length > 0

  return (
    <AppBar title={currentList?.name}>
      <>
        {uncheckedProductFiltered.map((product) => (
          <ProductItem
            item={product}
            key={product.id}
            onToggleCheck={() => handleToggleProductCheck(product)}
            onDelete={() => deleteProduct(listId, product.id)}
            onSetAmount={(amount) => setAmount(listId, product, amount)}
          />
        ))}

        {checkedProductsFiltered.length > 0 && (
          <>
            {checkedProductsFiltered.map((product) => (
              <ProductItem
                item={product}
                key={product.id}
                onToggleCheck={() => handleToggleProductCheck(product)}
                onDelete={() => deleteProduct(listId, product.id)}
                onSetAmount={(amount) => setAmount(listId, product, amount)}
              />
            ))}
          </>
        )}

        {!hasProductFiltered && (
          <NewProductItem name={term} onAdd={handleAddProduct} />
        )}

        <FilterProducts
          term={term}
          onSearch={handleSearch}
          onAdd={handleAddProduct}
        />
      </>
    </AppBar>
  )
}
