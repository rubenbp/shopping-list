import * as React from 'react'
import { sizes } from '../../../theme/size'
import styled from 'styled-components/macro'
import useClickPreventionOnDoubleClick from '../../../hooks/useClickPreventionOnDoubleClick'

interface Props {
  amount: number
  onAdd: () => void
  onSubtract: () => void
}

export const AmountOption: React.FC<Props> = ({
  amount,
  onAdd,
  onSubtract,
}) => (
  <ClickableBox onClick={onSubtract} onDoubleClick={onAdd}>
    <Wrapper>{amount || 1}</Wrapper>
  </ClickableBox>
)

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.large};
  height: ${sizes.large};
`

interface ClickableBoxProps {
  onClick: any
  onDoubleClick: any
}

const ClickableBox: React.FC<ClickableBoxProps> = ({
  children,
  onClick,
  onDoubleClick,
}) => {
  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    onClick,
    onDoubleClick,
  )

  return (
    <div onClick={handleClick} onDoubleClick={handleDoubleClick}>
      {children}
    </div>
  )
}
