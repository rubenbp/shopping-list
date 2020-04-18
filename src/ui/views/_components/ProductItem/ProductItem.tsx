import DeleteIconSvg from '@material-ui/icons/Delete'
import React, { useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components/macro'
import { Product } from '../../../../core/model/product/Product'
import { sizes } from '../../../theme/size'
import { AmountOption } from '../AmountOption'
import { ReactComponent as CheckboxOnIconSvg } from './check_box.svg'
import { ReactComponent as CheckboxOffIconSvg } from './check_box_outline_blank.svg'

interface Props {
  item: Product
  isHighlight?: boolean
  onToggleCheck: () => void
  onDelete: () => void
  onSetAmount: (amount: number) => void
}

export const ProductItem: React.FC<Props> = ({
  item,
  onToggleCheck,
  onDelete,
  onSetAmount,
  isHighlight = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Cambia el scroll de la vista para que sea visible
  useEffect(() => {
    if (isHighlight && ref?.current) {
      const scrollTo = ref.current.offsetTop - 56
      window.scrollTo(0, scrollTo)
    }
  }, [isHighlight])

  return (
    <Wrapper ref={ref} checked={item.checked} isHighlight={isHighlight}>
      <DeleteOption onClick={onDelete} />
      <ItemName>{item.name}</ItemName>
      <AmountOption amount={item.amount} onSet={onSetAmount} />
      <CheckOption checked={item.checked} onClick={onToggleCheck} />
    </Wrapper>
  )
}

const highlightAnimation = keyframes`
  0% {
    opacity: 0;
  }
  10%, 50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Wrapper = styled.div<{ checked: boolean; isHighlight: boolean }>`
  position: relative;
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

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #74ebd5;
    background-image: linear-gradient(45deg, #74ebd5 0%, #9face6 100%);

    z-index: -1;
    opacity: 0;

    ${(p) =>
      p.isHighlight &&
      css`
        animation: ${highlightAnimation} 1.5s forwards;
      `}
  }
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
  padding: 0.9rem;
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
