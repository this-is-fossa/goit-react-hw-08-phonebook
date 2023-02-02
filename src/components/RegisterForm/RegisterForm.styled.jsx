import styled from '@emotion/styled';

export const FormWrap = styled.form`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const LableForm = styled.label`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InputForm = styled.input`
  margin-top: 10px;
`;

export const FormBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f48b8b;
  border: 1px solid #111111;
  border-radius: 5px;

  :hover,
  :focus {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;
