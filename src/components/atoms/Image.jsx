import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${({ radius }) => radius || '5px'};  // Debería venir de styles 
`
// no acabo de entender el citado comentario como debería venir de styles? 

function Image({ ...props }) {
  return <StyledImage {...props} />
}

export default Image
