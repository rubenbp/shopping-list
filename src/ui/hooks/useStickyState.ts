import { useEffect, useState } from 'react'

/**
 * Permite guardar y recuperar un valor persistido en el dispositivo del
 * cliente
 *
 * @param defaultValue Valor por defecto si no existe ninguno guardado
 * @param key key donde guardar / obtener el valor
 */
export function useStickyState(defaultValue: string | null, key: string) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
