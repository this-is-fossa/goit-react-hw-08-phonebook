import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavWraper = styled.div`
  padding-right: 30px;
`;

export const RegisterLink = styled(NavLink)`
  padding: 5px 10px;
  border: 1px solid #111111;
  border-radius: 5px;
  color: #111111;
  background-color: #f48b8b;
  cursor: pointer;

  :hover,
  :focus {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;

export const LogInLink = styled(NavLink)`
  margin-left: 30px;
  padding: 5px 10px;
  border: 1px solid #111111;
  border-radius: 5px;
  color: #111111;
  background-color: #f48b8b;
  cursor: pointer;

  :hover,
  :focus {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;
