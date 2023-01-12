import PropTypes from 'prop-types'
import styled from "styled-components"

const OptionStyled = styled.option``

function Option({ value, ...props }) {
  return <OptionStyled value={value} { ...props } />
}

Option.propTypes = {
 value: PropTypes.string.isRequired,
}

export default Option
