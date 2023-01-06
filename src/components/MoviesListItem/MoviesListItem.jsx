import {
  MoviesListItemStyled,
  MoviesListItemImgStyled,
  MoviesListItemInfoStyled,
  LinkStyled,
} from './MoviesListItem.styled';

import { useLocation } from 'react-router-dom';

import slugify from 'react-slugify';

export const MoviesListItem = ({ movie }) => {
  const { pathname } = useLocation();

  return (
    <MoviesListItemStyled>
      <LinkStyled
        to={`/movies/${slugify(movie.title)}/${movie.id}`}
        state={{ from: pathname }}
      >
        <MoviesListItemImgStyled
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
              : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg'
          }
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
