import { AuthNavWraper, RegisterLink, LogInLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWraper>
      <RegisterLink to="/register">Register</RegisterLink>
      <LogInLink to="/login">Log In</LogInLink>
    </AuthNavWraper>
  );
};
