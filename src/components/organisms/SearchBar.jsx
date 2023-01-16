import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Icon, Button } from '../atoms'
import { SelectGroup } from '../molecules'

const SearchBarStyled = styled(FlexBox).attrs({ direction: 'row' })`
  gap: 1rem;
`

function SearchBar() {
  
  const data = {
    buildings: [
      { value: 'Piso' },
      { value: 'Chalet' },
      { value: 'Garaje' },
    ],
    cities: [
      { value: 'Madrid' },
      { value: 'Barcelona' },
      { value: 'Zaragoza' },
    ],
  }

  const bg =
    'linear-gradient(320deg, rgba(77,106,198,1) 0%, rgba(0,212,255,1) 100%)'
  return (
    <SearchBarStyled>
      <SelectGroup
        label="piso, chalet o garaje..."
        name="buildingType"
        id="buildingType"
        htmlFor="buildingType"
        onChange={() => {}}
        options={data.buildings}
      />
      <SelectGroup
        label="Madrid, Barcelona o Zaragoza..."
        name="buildingType"
        id="buildingType"
        htmlFor="buildingType"
        onChange={() => {}}
        options={data.cities}
      />
      <Button p="0 5px" bg={bg}>
        <Icon>search</Icon>
      </Button>
    </SearchBarStyled>
  )
}

export default SearchBar
