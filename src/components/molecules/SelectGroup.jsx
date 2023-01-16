import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Select, Label, Option } from '../atoms'
import { FlexBox } from '../../styles'

const StyledInputTextSelect = styled(FlexBox).attrs({ direction: 'row' })`
  label {
    display: none;
  }
`

function SelectGroup({ name, label, id, htmlFor, options, onChange }) {
  return (
    <StyledInputTextSelect>
      <Label id={id} htmlFor={htmlFor}>
        {label}
      </Label>
      <Select id={id} name={name} onChange={onChange}>
        <Option value="default" disabled defaultValue hidden>
          {label}
        </Option>
        {
          options.map(({value}) => (
            <Option key={value} value={value}>{value}</Option>
          ))
        }
      </Select>
    </StyledInputTextSelect>
  )
}

SelectGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string, 
  htmlFor: PropTypes.string,
  onChange: PropTypes.func,
}

export default SelectGroup
