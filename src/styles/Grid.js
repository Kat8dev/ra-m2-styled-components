import styled from 'styled-components'

const Grid = styled.div`
    max-width: 100vw;
    owerflow: hidden;
    display: grid;
    grid-template-columns: ${({columns}) => columns || 'repeat(3, 1fr)' };
    grid-template-rows: ${({rows}) => rows || 'auto' };
    gap: 1.2rem;
    @media(max-width: 900px) {
        grid-template-columns: auto;
    }
`

export default Grid

