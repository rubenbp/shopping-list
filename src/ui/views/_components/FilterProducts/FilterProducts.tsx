import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { ReactComponent as ClearIconSvg } from './clear.svg'

interface Props {
  term: string
  onSearch: (term: string) => void
}

export const FilterProducts: React.FC<Props> = ({ term, onSearch }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={term}
        onChange={event => onSearch(event.target.value)}
      />
      <ClearIcon onClick={() => onSearch('')} />
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
  background-color: white;
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
