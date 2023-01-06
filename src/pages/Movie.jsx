import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  Outlet,
  Link,
  useNavigate,
} from 'react-router-dom';
import { Section } from '../components/Section';
import { fetchMovie } from '../utils/fetchAPI';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => error && navigate(`/`));
  }, [movieId, navigate]);

  const { state } = useLocation();

  return (
    movie && (
      <Section title={movie.title}>
        <Link to={state ? state.from : '/'}>Go back</Link>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
              : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg'
          }
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
        <ul>
          <li>
            <Link to="actors" state={{ from: state ? state.from : '/' }}>
              Actors
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: state ? state.from : '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </Section>
    )
  );
};

export default Movie;
