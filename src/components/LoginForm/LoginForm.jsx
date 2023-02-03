import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrap, LableForm, InputForm, FormBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormWrap onSubmit={handleSubmit}>
      <LableForm>
        Email
        <InputForm type="email" name="email" autoComplete="username" />
      </LableForm>
      <LableForm>
        Password
        <InputForm
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </LableForm>
      <FormBtn type="submit">Log In</FormBtn>
    </FormWrap>
  );
};
