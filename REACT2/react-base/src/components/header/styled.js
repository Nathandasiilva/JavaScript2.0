import styled from 'styled-components';
import { PrimaryColor } from "../../config/colors";

exoport const Nav = styled.nav`
background: ${PrimaryColor};
padding: 20px;
display: flex;
align-items: center;
justify-content: center;

a {
  color: #fff;
  margin: 0 10px 0 0;
  font-weight: bold;
}
`;
