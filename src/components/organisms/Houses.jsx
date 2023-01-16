import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexBox, Grid } from '../../styles'
import { Text } from '../atoms'
import { CardHouse } from '../molecules'

const HousesStyled = styled(FlexBox)``

function Houses({ data }) {
  return (
    <HousesStyled>
      {data ? (
        <Grid>
          {data.map(({ id, img, desc, price }) => (
            <CardHouse key={id} img={img} desc={desc} price={price} />
          ))}
        </Grid>
      ) : (
        <Text>La casa que buscas no coincide en nuestra aplicación</Text>
      )}
    </HousesStyled>
  )
}

Houses.propTypes = {
  // Definir el array de datos más concretamente, definiendo cada elemento
  data: PropTypes.array,
}

export default Houses
