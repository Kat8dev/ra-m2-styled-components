import styled from "styled-components"
import PropTypes from "prop-types"
import { FlexBox } from "../../styles"

const IconStyled = styled(FlexBox).attrs({justify: 'center', align: 'center'})`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  font-size: 24px; 
`   

function Icon({children, ...props}) {
  return (
    <IconStyled {...props}>
      {children}    
    </IconStyled>
  )
}

Icon.propTypes = {
    children: PropTypes.string.isRequired
}

export default styled(Icon)``
