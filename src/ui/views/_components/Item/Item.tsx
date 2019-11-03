import * as React from 'react'
import styled from 'styled-components/macro'
import { sizes } from '../../../theme/size'
import { Item } from '../../../../core/model/item/Item'

interface Props {
  item: Item
}

export const ItemLine: React.FC<Props> = ({ item }) => (
  <Wrapper>{item.name}</Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${sizes.large};
  padding: ${sizes.extrasmall};
`
