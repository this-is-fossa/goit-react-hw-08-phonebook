import { NavLink } from 'react-router-dom';
import { AuthNavWraper, LogInLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWraper>
      <NavLink to="/register">Register</NavLink>
      <LogInLink to="/login">Log In</LogInLink>
    </AuthNavWraper>
  );
};
