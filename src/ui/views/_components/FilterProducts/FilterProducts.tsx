import { blueGrey } from '@material-ui/core/colors'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputBase from '@material-ui/core/InputBase'
import FilterListIcon from '@material-ui/icons/FilterList'
import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { ReactComponent as ClearIconSvg } from './clear.svg'
interface Props {
  term: string
  onSearch: (term: string) => void
  onAdd: () => void
  filterRef?: React.RefObject<HTMLInputElement>
}

export const FilterProducts: React.FC<Props> = ({
  term,
  onSearch,
  onAdd,
  filterRef,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      onAdd()
    }
  }

  return (
    <Wrapper>
      <InputBase
        ref={filterRef}
        value={term}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <FilterListIcon style={{ color: blueGrey[400] }} />
          </InputAdornment>
        }
      />
      {term?.length > 0 && <ClearIcon onClick={() => onSearch('')} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding-left: 10px;

  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`

const iconStyles = css`
  width: ${sizes.large};
  height: ${sizes.large};
  padding: ${sizes.small};
`

const ClearIcon = styled(ClearIconSvg)`
  ${iconStyles}
`
