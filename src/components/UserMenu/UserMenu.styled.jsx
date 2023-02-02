import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const LogOutBtn = styled.button`
  margin-left: 20px;
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
