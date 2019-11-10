import * as React from 'react'
import { ReactComponent as LoadingIconSvg } from './loading.svg'
import styled from 'styled-components'
import { sizes } from '../../../theme/size'

export const LoadingView = () => (
  <Wrapper>
    <LoadingIconSvg width={sizes.extrahuge} height={sizes.extrahuge} />
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`
