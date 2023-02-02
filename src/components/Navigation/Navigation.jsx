import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavWraper, NavHomeLink, NavContactsLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavWraper>
      <NavHomeLink to="/">Home</NavHomeLink>
      {isLoggedIn && <NavContactsLink to="/contacts">Contacts</NavContactsLink>}
    </NavWraper>
  );
};
