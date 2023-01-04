import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListItemStyled = styled.li`
  width: 20%;
  height: 400px;
`;

export const MoviesListItemImgStyled = styled.img`
  width: 100%;
`;

export const MoviesListItemInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  height: 100%;
  width: 100%;
`;
