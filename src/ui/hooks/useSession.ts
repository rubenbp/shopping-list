import { useContext } from 'react';

import { userContext } from '../infraestructure/UserContext';

export const useSession = () => {
  const { user, initializing } = useContext(userContext)
  return { user, initializing }
}
