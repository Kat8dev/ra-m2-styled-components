import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

function Image({...props}) {
  return (
    <StyledImage {...props} />
  )
}

export default Image
