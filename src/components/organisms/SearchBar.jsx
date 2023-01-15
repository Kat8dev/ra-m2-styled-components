import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Icon, Button, Option } from '../atoms'
import { InputTextSelect } from '../molecules'

const SearchBarStyled = styled(FlexBox).attrs({ direction: 'row' })`
  gap: 1rem;
`

function SearchBar() {
  const bg =
    'linear-gradient(320deg, rgba(77,106,198,1) 0%, rgba(0,212,255,1) 100%)'
  return (
    <SearchBarStyled>
      {/* Debería ser un SelectGroup y tener un prop options al cual le pasas un array y renderizas las opciones, ahora has escrito 4, pero si fuesen 500 no tendría sentido escribirlas */}
      <InputTextSelect
        title="piso, chalet o garaje..."
        name="buildingType"
        id="buildingType"
        htmlFor="buildingType"
      >
        <Option value="default" disabled defaultValue hidden>
          piso, chalet o garaje...
        </Option>
        <Option value="piso">piso</Option>
        <Option value="chalet">chalet</Option>
        <Option value="garaje">garaje</Option>
      </InputTextSelect>
      <InputTextSelect
        title="Madrid, Barcelona o Zaragoza..."
        name="buildingType"
        id="buildingType"
        htmlFor="buildingType"
      >
        <Option value="default" disabled defaultValue hidden>
          Madrid, Barcelona o Zaragoza...
        </Option>
        <Option value="Madrid">Madrid</Option>
        <Option value="Barcelona">Barcelona</Option>
        <Option value="Zaragoza">Zaragoza</Option>
      </InputTextSelect>
      <Button p="0 5px" bg={bg}>
        <Icon>search</Icon>
      </Button>
    </SearchBarStyled>
  )
}

export default SearchBar
