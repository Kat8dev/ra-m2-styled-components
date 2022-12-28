import styled from 'styled-components'
import Houses from '../components/organisms/Houses'
import { Body } from '../components/layout'
import url from '../data.json'
import { FlexBox, colors, Grid } from '../styles'
import { Button } from '../components/atoms'

const GoogleMap = styled(FlexBox).attrs({justify: 'center', align: 'center'})`
  background-color: #808080;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 40px;
  grid-column: 2;
  grid-row: 1;
  box-shadow: 0px 5px 11px 1px rgba(0,0,0,0.46);
`
const BuscadorStyled = styled(Grid).attrs({columns: '1fr 1fr'})`
  margin: 1.5rem;
  gap: 1.5rem;
  button {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.49); 
  }
`

function Buscador() {

  return (
    <Body>
      <BuscadorStyled>
        <Houses data={url} />
        <Button bg={colors.secondary}>Cargar más</Button>
        <GoogleMap>Google Map</GoogleMap> 
      </BuscadorStyled>
    </Body>
  )
}

export default Buscador
