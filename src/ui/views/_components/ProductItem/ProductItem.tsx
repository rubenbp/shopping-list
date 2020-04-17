import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { Product } from '../../../../core/model/product/Product'
import { sizes } from '../../../theme/size'
import { AmountOption } from './AmountOption'
import { ReactComponent as CheckboxOnIconSvg } from './check_box.svg'
import { ReactComponent as CheckboxOffIconSvg } from './check_box_outline_blank.svg'
import { ReactComponent as DeleteIconSvg } from './delete.svg'

interface Props {
  item: Product
  onToggleCheck: () => void
  onDelete: () => void
  onSetAmount: (amount: number) => void
}

export const ProductItem: React.FC<Props> = ({
  item,
  onToggleCheck,
  onDelete,
  onSetAmount,
}) => (
  <Wrapper checked={item.checked}>
    <DeleteOption onClick={onDelete} />
    <ItemName>{item.name}</ItemName>
    <AmountOption amount={item.amount} onSet={onSetAmount} />
    <CheckOption checked={item.checked} onClick={onToggleCheck} />
  </Wrapper>
)

const Wrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding-top: ${sizes.extrasmall};
  padding-bottom: ${sizes.extrasmall};
  user-select: none;

  background-color: ${(p) => p.checked && '#eee'};

  ${(p) =>
    p.checked &&
    css`
      color: gray;
      svg {
        fill: gray;
      }
    `}
`

const CheckOption: React.FC<{ checked: boolean; onClick: () => void }> = ({
  checked,
  onClick,
}) => {
  return checked ? (
    <CheckboxOnIcon onClick={onClick} />
  ) : (
    <CheckboxOffIcon onClick={onClick} />
  )
}

const ItemName = styled.div`
  flex-grow: 1;
`

const iconStyles = css`
  width: ${sizes.large};
  height: ${sizes.large};
  padding: ${sizes.small};
`

const DeleteOption = styled(DeleteIconSvg)`
  ${iconStyles};
`

const CheckboxOnIcon = styled(CheckboxOnIconSvg)`
  ${iconStyles};
`

const CheckboxOffIcon = styled(CheckboxOffIconSvg)`
  ${iconStyles};
`
