
import { Link as RouterLink } from 'react-router-dom'

import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: rgba(0, 0, 0, 0.74);
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  text-decoration:none;
`;

export default Link