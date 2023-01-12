import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputText, Label } from '../atoms'
import { FlexBox } from '../../styles'

const StyledBusquedaInputs = styled(FlexBox).attrs({ direction: 'row' })``

// Si es un type text, llamarlo InputText
function InputsBusqueda({ placeholder, value, name, children, id, htmlFor }) {
  return (
    <StyledBusquedaInputs>
      {/* El label siempre debería tener un valor, aquí el children es vacio */}
      {/* El label debe ocultarse mediante CSS: https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements  */}
      <Label id={id} htmlFor={htmlFor}>
        {children}
      </Label>
      <InputText placeholder={placeholder} value={value} name={name} />
    </StyledBusquedaInputs>
  )
}

InputsBusqueda.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
}

export default InputsBusqueda
