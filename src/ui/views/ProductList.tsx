import ListSubheader from '@material-ui/core/ListSubheader'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getList, List } from '../../core/actions/lists'
import { addNewProduct } from '../../core/actions/product/addNewProduct'
import { deleteProduct } from '../../core/actions/product/deleteProduct'
import { setAmount } from '../../core/actions/product/setAmount'
import { toggleProductCheck } from '../../core/actions/product/toggleProductCheck'
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
  const [highlightItem, setHighlightItem] = useState<string | null>()
  const filterRef = useRef<HTMLInputElement>(null)

  // Almacena la lista que está siendo visitada
  useEffect(() => {
    setDefaultList(listId)
  }, [listId, setDefaultList])

  // Obtiene los elementos de la lista
  useEffect(() => {
    let isMounted = true
    getList(listId).then((list) => {
      if (isMounted) setCurrentList(list)
    })
    return () => {
      isMounted = false
    }
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
    setHighlightItem(null)
    toggleProductCheck(listId, product)
    if (term && filterRef) {
      filterRef.current?.focus()
      setHighlightItem(product.id)
    }
    setTerm('')
  }

  const handleAddProduct = async (amount: number) => {
    const name = term
    setTerm('')
    setHighlightItem(null)
    if (filterRef) filterRef.current?.focus()
    const newProductRef = await addNewProduct(listId, name, amount)
    setHighlightItem(newProductRef)
  }

  const handleAddProductOnFilter = async () => {
    if (term.trim().length === 0) {
      return
    }
    handleAddProduct(1)
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
            isHighlight={highlightItem === product.id}
          />
        ))}

        {checkedProductsFiltered.length > 0 && (
          <>
            <ListSubheader
              style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}
            >
              Comprado
            </ListSubheader>
            {checkedProductsFiltered.map((product, index) => (
              <ProductItem
                item={product}
                key={product.id}
                onToggleCheck={() => handleToggleProductCheck(product)}
                onDelete={() => deleteProduct(listId, product.id)}
                onSetAmount={(amount) => setAmount(listId, product, amount)}
                isLast={index === checkedProductsFiltered.length - 1}
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
          onAdd={handleAddProductOnFilter}
          filterRef={filterRef}
        />
      </>
    </AppBar>
  )
}
