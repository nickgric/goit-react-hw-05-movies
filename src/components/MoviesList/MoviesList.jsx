import { MoviesListItem } from '../MoviesListItem';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  // console.log(movies);
  return (
    <MoviesListStyled>
      {movies.map(movie => (
        <MoviesListItem movie={movie} key={movie.id} />
      ))}
    </MoviesListStyled>
  );
};
