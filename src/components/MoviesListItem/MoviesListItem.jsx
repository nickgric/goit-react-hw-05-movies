import {
  MoviesListItemStyled,
  MoviesListItemImgStyled,
  MoviesListItemInfoStyled,
  LinkStyled,
} from './MoviesListItem.styled';

import slugify from 'react-slugify';

export const MoviesListItem = ({ movie }) => {
  // console.log(movie);
  return (
    <MoviesListItemStyled>
      <LinkStyled to={`/movies/${slugify(movie.title)}/${movie.id}`}>
        <MoviesListItemImgStyled
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <MoviesListItemInfoStyled>
          <h3>{movie.title}</h3>
          <ul>
            <li>Release: {movie.release_date}</li>
            <li>Rating: {movie.vote_average}</li>
          </ul>
        </MoviesListItemInfoStyled>
      </LinkStyled>
    </MoviesListItemStyled>
  );
};
