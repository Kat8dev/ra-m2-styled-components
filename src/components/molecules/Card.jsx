import PropTypes from 'prop-types'
import styled from "styled-components";
import FlexBox from "../../styles/FlexBox";
import { Image } from "../atoms";

const CardStyled = styled(FlexBox)`
    max-width: ${({width}) => width || '240px'};
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.49); 
`

function Card({img, children, ...rest}) {
    return (
        <CardStyled>
            <Image src={img || './assets/noImage.jpg'}/>
            <FlexBox {...rest}>
                {children}
            </FlexBox>
        </CardStyled>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    children: PropTypes.node,
}

export default Card