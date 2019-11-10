import React from 'react'
import { useItems } from './useItems'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ItemLine } from './_components/ItemList/ItemList'

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
          <h2>Checked</h2>
          {checkedItems.map(item => (
            <ItemLine item={item} key={item.id} />
          ))}
        </>
      )}
    </>
  )
}
