import * as React from 'react'
import styled from 'styled-components/macro'
import { sizes } from '../../../theme/size'

interface Props {
  amount: number
}

export const AmountOption: React.FC<Props> = ({ amount }) => (
  <Wrapper>{amount || 1}</Wrapper>
)

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.large};
  height: ${sizes.large};
`
