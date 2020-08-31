import styled from 'styled-components';


const Price = styled.div`
display: flex;
justify-content: center;
padding: ${props => props.isOldPrice ? '2px 10px 10px' : '10px'};
`

export default Price

