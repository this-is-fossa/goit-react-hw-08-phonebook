import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  list-style: none;
  border: 1px solid #000000;
  border-radius: 5px;
`;
export const FormTitle = styled.label`
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 180px;
  margin-left: 10px;
  margin-bottom: 10px;

  :hover :focus {
    outline: blue;
  }
`;

export const FormBtn = styled.button`
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: #f48b8b;
  border: 1px solid #111111;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    color: #f6f2f2;
    background-color: #f40101;
    border-color: #f6f2f2;
  }
`;
