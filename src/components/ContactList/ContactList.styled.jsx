import styled from '@emotion/styled';

export const ListTitle = styled.h1`
  margin-left: 100px;
`;

export const Loading = styled.div`
  margin-left: 100px;
`;

export const CardList = styled.ul`
  width: 350px;
  margin-left: 100px;
  padding: 0;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const DeleteBtn = styled.button`
  width: 50px;
  height: 20px;
  display: block;
  padding: 0;
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
