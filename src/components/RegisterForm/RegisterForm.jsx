import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormWrap, LableForm, InputForm, FormBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormWrap onSubmit={handleSubmit}>
      <LableForm>
        Username
        <InputForm type="text" name="name" autoComplete="username" />
      </LableForm>
      <LableForm>
        Email
        <InputForm type="email" name="email" />
      </LableForm>
      <LableForm>
        Password
        <InputForm
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </LableForm>
      <FormBtn type="submit">Register</FormBtn>
    </FormWrap>
  );
};
