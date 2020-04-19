import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'

export const useSession = () => {
  const { user, initializing } = useContext(SessionContext)
  return { user, initializing }
}
