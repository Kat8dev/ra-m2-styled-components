import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputText, Label } from "../atoms"
import { FlexBox } from "../../styles"

const StyledBusquedaInputs = styled(FlexBox).attrs({direction: 'row'})`
  
`

function InputsBusqueda({placeholder, value, name, children, id, htmlFor}) {
  return (
    <StyledBusquedaInputs>
      <Label id={id} htmlFor={htmlFor}>{children}</Label>
      <InputText placeholder={placeholder} value={value} name={name}/>
    </StyledBusquedaInputs>
  )
}

InputsBusqueda.propTypes = {
    placeholder: PropTypes.string, 
    value: PropTypes.string,
    name: PropTypes.string, 
    children: PropTypes.string,
    id: PropTypes.string, 
    htmlFor: PropTypes.string
}

export default InputsBusqueda
