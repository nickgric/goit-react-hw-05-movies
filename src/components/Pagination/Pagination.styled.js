import styled from 'styled-components';

export const PaginationContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PaginationButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  font-weight: 800;
  color: teal;

  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;

  cursor: pointer;

  &:hover,
  &:focus {
    color: burlywood;
  }
`;

export const PaginationPagesCounterStyled = styled.p`
  color: navy;
  font-weight: 600;
`;
