import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, FlexBox } from '../../styles'

// Creo que seria mejor tener styled.button, aunque me vale
const ButtonStyled = styled(FlexBox).attrs({
  justify: 'center',
  align: 'center',
})`
  cursor: pointer;
  border-radius: 8px;
  color: white;
  border: 0;
`

export default function Button({
  children,
  bg = colors.main,
  p = '5px 14px',
  onClick = () => {},
}) {
  return (
    <ButtonStyled
      as='button'
      type='button'
      onClick={onClick}
      style={{ background: bg, padding: p }}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  p: PropTypes.string,
  onClick: PropTypes.func,
}
