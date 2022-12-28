import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexBox, colors } from '../../styles'
import { Text, Button, Title } from '../atoms'
import { Card } from './index'

const StyledHouse = styled(Card)`
  padding: 0.5rem;
  p {
    margin-top: 0;
    width: 88%; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

function CardHouse({ img, desc, price }) {
  return (
    <StyledHouse img={img}>
      <FlexBox>
        <Text>{desc}</Text>
        <FlexBox direction="row" align="center" justify="space-between">
          <Title tagType="h3" color={colors.font.headings}>{price}</Title>
          <Button bg={colors.purple}>Localizar</Button>
        </FlexBox>
      </FlexBox>
    </StyledHouse>
  )
}

CardHouse.propTypes = {
  img: PropTypes.string,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default CardHouse
