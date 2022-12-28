import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FlexBox, colors } from '../../styles'
import { Title } from '../atoms'

const HeaderStyled = styled(FlexBox).attrs({ direction: "row", justify: "space-between", align: "center" })`
  padding-left: 2rem;
  padding-right: 2rem;
  ul {
    gap: 1rem;
  }
`
const Links = styled(NavLink)`
  text-decoration: 0;
  color: ${colors.font.base};
    &.active {
      color: #b284be;
    }
`

function Header() {
  return (
    <HeaderStyled>
      <Title tagType='h3' color={colors.main}>MIPISO.com.es</Title>
      <FlexBox as='ul' direction="row">
        <Links to="/">Buscador</Links>
        <Links to="/data">Datos</Links>
        <Links to="/profile">Mi Perfil</Links>
      </FlexBox>
    </HeaderStyled>
  )
}

export default Header
