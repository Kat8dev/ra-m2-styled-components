import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from "./index"
import useSize from '../../hooks/useSize'

const TitleStyled = styled(Text)`
  margin: 0;
`

function Title({children, tagType, color}) {

  const size = useSize(tagType)

  return (
    <TitleStyled as={tagType} fontSize={size} color={color}>
      {children}
    </TitleStyled>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  tagType: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Title