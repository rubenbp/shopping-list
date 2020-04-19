import { blueGrey, grey } from '@material-ui/core/colors'
import CheckboxOffIconSvg from '@material-ui/icons/CheckBoxOutlineBlankRounded'
import CheckboxOnIconSvg from '@material-ui/icons/CheckBoxRounded'
import DeleteIconSvg from '@material-ui/icons/DeleteForever'
import React, { useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components/macro'
import { Product } from '../../../../core/model/product/Product'
import { sizes } from '../../../theme/size'
import { AmountOption } from '../AmountOption'

interface Props {
  item: Product
  isHighlight?: boolean
  onToggleCheck: () => void
  onDelete: () => void
  onSetAmount: (amount: number) => void
  isLast?: boolean
}

export const ProductItem: React.FC<Props> = ({
  item,
  onToggleCheck,
  onDelete,
  onSetAmount,
  isHighlight = false,
  isLast = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  console.log(isLast)
  // Cambia el scroll de la vista para que sea visible
  useEffect(() => {
    if (isHighlight && ref?.current) {
      const scrollTo = ref.current.offsetTop - 56
      window.scrollTo(0, scrollTo)
    }
  }, [isHighlight])

  return (
    <Wrapper
      ref={ref}
      checked={item.checked}
      isHighlight={isHighlight}
      isLast={isLast}
    >
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

interface WrapperProps {
  checked: boolean
  isHighlight: boolean
  isLast: boolean
}
const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding-top: ${sizes.extrasmall};
  padding-bottom: ${sizes.extrasmall};
  user-select: none;

  background-color: ${(p) => p.checked && '#eee'};
  border-bottom: 1px solid ${grey[200]};

  ${(p) =>
    p.checked &&
    css`
      border-bottom: ${!p.isLast && `1px solid ${grey[300]}`};
      color: ${grey[500]};
      svg {
        fill: ${grey[400]};
      }
    `}

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #21d4fd;
    background-image: linear-gradient(59deg, #21d4fd 0%, #8e54f7 100%);

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
    <CheckboxOnIcon onClick={onClick} style={{ color: blueGrey[200] }} />
  ) : (
    <CheckboxOffIcon onClick={onClick} style={{ color: blueGrey[200] }} />
  )
}

const ItemName = styled.div`
  flex-grow: 1;
`

const iconStyles = css`
  && {
    width: ${sizes.large};
    height: ${sizes.large};
    padding: 0.9rem;
  }
`

const DeleteOption = styled(DeleteIconSvg)`
  ${iconStyles};
  color: #d68080;
`

const CheckboxOnIcon = styled(CheckboxOnIconSvg)`
  ${iconStyles};
`

const CheckboxOffIcon = styled(CheckboxOffIconSvg)`
  ${iconStyles};
`
