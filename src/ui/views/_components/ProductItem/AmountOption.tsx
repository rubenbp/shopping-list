import { MenuItem } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import React from 'react'
import styled from 'styled-components/macro'
import { sizes } from '../../../theme/size'

interface Props {
  amount: number
  onSet: (value: number) => void
}

export const AmountOption: React.FC<Props> = ({ amount, onSet }) => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null,
  )

  const setAmount = (amount: number) => {
    onSet(amount)
    setAnchorElement(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorElement(event.currentTarget)
  }

  return (
    <>
      <Wrapper onClick={handleClick}>{amount || 1}</Wrapper>
      <Menu anchorEl={anchorElement} open={Boolean(anchorElement)}>
        {[...new Array(5)].map((_, index) => (
          <MenuItem key={index} onClick={() => setAmount(index + 1)}>
            {index + 1}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.large};
  height: ${sizes.large};
`
