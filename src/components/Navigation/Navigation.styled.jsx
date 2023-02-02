import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWraper = styled.nav`
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

export const NavHomeLink = styled(NavLink)`
  padding: 5px 10px;
  border: 1px solid #111111;
  border-radius: 5px;
  color: #111111;
  background-color: #f48b8b;

  :hover,
  :focus {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;

export const NavContactsLink = styled(NavLink)`
  margin-left: 20px;
  padding: 5px 10px;
  border: 1px solid #111111;
  border-radius: 5px;
  color: #111111;
  background-color: #f48b8b;

  :hover,
  :focus {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;
