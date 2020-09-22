import styled from "styled-components";
import React from "react";

const AuthorsWrapper = styled.div`
  padding: 5px;
  opacity: 0.8;
  margin: ${(props) => (props.isList ? "0px 20px" : "0px")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Authors({ authorsData, isList }) {
  const authorsList = authorsData.map((author) => author.name);

  return (
    <AuthorsWrapper isList={isList}>{authorsList.join(", ")}</AuthorsWrapper>
  );
}

export default Authors;
