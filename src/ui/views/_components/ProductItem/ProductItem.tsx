import * as React from 'react'
import styled from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { Product } from '../../../../core/model/product/Product'
import { ReactComponent as DeleteIcon } from './delete.svg'
import { ReactComponent as CheckboxOnIconSvg } from './check_box.svg'
// import { ReactComponent as CheckboxOffIconSvg } from './check_box_outline_blank.svg'

interface Props {
  item: Product
}

export const ItemLine: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <DeleteOption />
    <ItemName>{item.name}</ItemName>
    <CheckOption />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding-top: ${sizes.extrasmall};
  padding-bottom: ${sizes.extrasmall};
`

const DeleteOption = styled(DeleteIcon)`
  width: ${sizes.medium};
  height: ${sizes.medium};
  padding: ${sizes.extrasmall};
`

const CheckOption = () => <CheckboxOnIcon />

const CheckboxOnIcon = styled(CheckboxOnIconSvg)`
  width: ${sizes.medium};
  height: ${sizes.medium};
  padding: ${sizes.extrasmall};
`

const ItemName = styled.div`
  flex-grow: 1;
`
