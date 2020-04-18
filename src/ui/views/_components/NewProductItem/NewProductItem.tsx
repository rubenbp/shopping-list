import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { ReactComponent as AddIconSvg } from './add_box.svg'
import { AmountOption } from './AmountOption'

interface Props {
  name: string
  onAdd: () => void
}

export const NewProductItem: React.FC<Props> = ({ name, onAdd }) => (
  <Wrapper>
    <EmptyIcon />
    <ItemName>{name}</ItemName>
    <AmountOption amount={1} />
    <AddOption onClick={onAdd} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding-top: ${sizes.extrasmall};
  padding-bottom: ${sizes.extrasmall};
  user-select: none;
`

const ItemName = styled.div`
  flex-grow: 1;
`

const iconStyles = css`
  width: ${sizes.large};
  height: ${sizes.large};
  padding: ${sizes.small};
`

const AddOption = styled(AddIconSvg)`
  ${iconStyles};
`

const EmptyIcon = styled.div`
  ${iconStyles};
`
