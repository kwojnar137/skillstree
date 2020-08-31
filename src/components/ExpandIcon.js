import styled from 'styled-components';


const ExpandIcon = styled.div`
transform: ${props => (props.rotateAction ? 'rotate(180deg)' : 'rotate(0deg)')};
display: flex;
justify-content: center;
`

export default ExpandIcon