import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Select, Label } from '../atoms'
import { FlexBox } from '../../styles'

const StyledInputTextSelect = styled(FlexBox).attrs({ direction: 'row' })`
  label {
    display: none;
  }
`

// Llamarlo SelectGroup
function InputTextSelect({ name, title, id, htmlFor, children }) {
  return (
    <StyledInputTextSelect>
      <Label id={id} htmlFor={htmlFor}>
        {title}
      </Label>
      <Select id={id} name={name}>
        {children}
      </Select>
    </StyledInputTextSelect>
  )
}

InputTextSelect.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
}

export default InputTextSelect
