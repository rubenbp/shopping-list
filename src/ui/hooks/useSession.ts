import { useContext } from 'react'
import { UserContext } from '../infraestructure/UserContext'

export const useSession = () => {
  const { user, initializing } = useContext(UserContext)
  return { user, initializing }
}
