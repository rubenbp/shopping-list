import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import React from 'react'
import styled from 'styled-components/macro'
import { login } from '../../core/actions/auth'
export const Login = () => (
  <Center>
    <Box marginBottom={10}>
      <Typography variant="h3" gutterBottom align="center">
        ¡Hola!
      </Typography>
    </Box>
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
