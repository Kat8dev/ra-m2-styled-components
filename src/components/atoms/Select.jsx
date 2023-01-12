import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
  appearance: none;
  border-radius: 5px;
  border: 0;
  outline: 1px solid #dbd7d2;
  box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.40);
  width: 400px;
  padding: 0.7rem;
  cursor: pointer;
  line-height: 1.50;
`

function Select({ id, name, children }) {
  return (
    <StyledSelect defaultValue='default' id={id} name={name}>{children}</StyledSelect>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
}

export default Select


