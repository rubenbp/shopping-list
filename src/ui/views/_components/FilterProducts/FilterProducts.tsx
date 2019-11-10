import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { ReactComponent as ClearIconSvg } from './clear.svg'
import { useState } from 'react'

interface Props {
  onSearch: (text: string) => void
}

export const FilterProducts: React.FC<Props> = ({ onSearch }) => {
  const [text, setText] = useState('')

  const handleSearch = (text: string) => {
    setText(text)
    onSearch(text)
  }

  return (
    <Wrapper>
      <Input
        type="text"
        value={text}
        onChange={event => handleSearch(event.target.value)}
      />
      <ClearIcon onClick={() => handleSearch('')} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  height: ${sizes.large};
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Input = styled.input`
  flex-grow: 1;
  padding: ${sizes.small};

  font-size: 1rem;
  border: none;
  outline: none;
`

const iconStyles = css`
  width: ${sizes.large};
  height: ${sizes.large};
  padding: ${sizes.small};
`

const ClearIcon = styled(ClearIconSvg)`
  ${iconStyles}
`
