import styled from 'styled-components'


export const AlertBoxContainer = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
  display: ${props => props.show ? 'block' : "none"};
`