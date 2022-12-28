import styled from "styled-components"
import PropTypes from 'prop-types'

const LabelStyled = styled.label`
  
`

function Label({children, id, htmlFor}) {
  return (
    <LabelStyled id={id} htmlFor={htmlFor}>{children}</LabelStyled>
  )
}

Label.propTypes = {
    children: PropTypes.string,
    id: PropTypes.string,
    htmlFor: PropTypes.string
}

export default Label
