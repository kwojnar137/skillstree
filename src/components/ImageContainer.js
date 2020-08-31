import styled from 'styled-components';


const ImageContainer = styled.div`
height: 200px;
width: ${props => props.width || 'inherit'};
display: flex;
justify-content: center;
align-items: center;
  overflow: hidden;
`

export default ImageContainer