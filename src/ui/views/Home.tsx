import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { login } from '../../core/actions/auth'
import { useSession } from '../hooks/useSession'
import { ProductList } from './ProductList'
import { AppBar } from './_components/AppBar'
import { LoadingView } from './_components/LoadingView'

export const Home = () => {
  const { user, initializing } = useSession()

  if (initializing) {
    return <LoadingView />
  }

  if (!user) {
    return <LoginView />
  }

  return (
    <AppBar>
      <Switch>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </AppBar>
  )
}

const LoginView = () => (
  <Center>
    <Typography variant="h3" gutterBottom align="center">
      ¡Hola!
    </Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<HowToRegIcon />}
      onClick={() => login()}
    >
      Identificarme
    </Button>
  </Center>
)

const Center: React.FC = ({ children }) => (
  <CenterWrapper>
    <div>{children}</div>
  </CenterWrapper>
)

const CenterWrapper = styled.div`
  position: fixed;
  display: flex;

  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
