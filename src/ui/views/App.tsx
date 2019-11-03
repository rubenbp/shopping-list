import React from 'react'
import { useItems } from './useItems'
import { initFirebaseApp } from './firebase'

initFirebaseApp()

export const App: React.FC = () => {
  const items = useItems()

  return (
    <>
      {!items && <div>Loading...</div>}
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
