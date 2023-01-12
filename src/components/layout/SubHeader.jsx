import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { SearchBar } from '../organisms'

const SubHeaderStyled = styled(FlexBox).attrs({ direction: 'row' })`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  background-color: lightblue;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  }
`

function SubHeader({ ...props }) {

  return (
    <SubHeaderStyled {...props}>
      <SearchBar />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
