import styled from "styled-components";

export const AlertBoxContainer = styled.div`
  padding: 20px;
  /* background-color: #f44336; */
  background-color: ${(props) => props.variant};
  color: white;
`;
