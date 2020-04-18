import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { AmountOption } from '../AmountOption'
import { ReactComponent as AddIconSvg } from './add_box.svg'

interface Props {
  name: string
  onAdd: (amount: number) => void
}

export const NewProductItem: React.FC<Props> = ({ name, onAdd }) => {
  const [amount, setAmount] = React.useState(1)

  const handleSetAmmount = (amount: number) => {
    setAmount(amount)
  }

  const handleAdd = () => {
    onAdd(amount)
  }

  return (
    <Wrapper>
      <EmptyIcon />
      <ItemName>{name}</ItemName>
      <AmountOption amount={amount} onSet={handleSetAmmount} />
      <AddOption onClick={handleAdd} />
    </Wrapper>
  )
}

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
