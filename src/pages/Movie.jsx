import { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { fetchMovie } from '../utils/fetchAPI';

export const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(movieId).then(response => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    movie && (
      <Section title={movie.title}>
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <p>{movie.tagline}</p>
          <ul>
            <li>Status: {movie.status}</li>
            <li>Release: {movie.release_date}</li>
            <li>Rating: {movie.vote_average}</li>
            <li>Budget: {movie.budget}</li>
            <li>Revenue: {movie.revenue}</li>
          </ul>
          <p>{movie.overview}</p>
        </div>
        <Outlet />
      </Section>
    )
  );
};
