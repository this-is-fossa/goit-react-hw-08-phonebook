import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Registered'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<ContactsPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
