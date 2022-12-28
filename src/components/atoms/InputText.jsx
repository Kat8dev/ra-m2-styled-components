import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  border-radius: 5px;
  border: 0;
  outline: 1px solid #dbd7d2;
  box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.40);
  width: 400px;
  padding: 0.5rem;
`

function InputText({placeholder, value, name}) {
  return (
    <StyledInput type='text' placeholder={placeholder} value={value} name={name} />
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
}

export default InputText


