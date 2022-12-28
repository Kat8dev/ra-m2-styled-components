import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import {  Icon,Button } from '../atoms'
import { InputBusqueda } from '../molecules'

const SubHeaderStyled = styled(FlexBox).attrs({ direction: 'row' })`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  background-color: lightblue;
  gap: 2rem;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  } 
`

function SubHeader({ ...props }) {
  const bg =
    'linear-gradient(320deg, rgba(77,106,198,1) 0%, rgba(0,212,255,1) 100%)'
  return (
    <SubHeaderStyled {...props}>
      <InputBusqueda placeholder="piso, chalet o garaje..." />
      <InputBusqueda placeholder="Madrid, Barcelona o Zaragoza..." />
      <Button p="0 5px" bg={bg}>
        <Icon>search</Icon>
      </Button>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
