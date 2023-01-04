import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchTrending } from '../utils/fetchAPI';

import { Section } from '../components/Section';
import { MoviesList } from 'components/MoviesList';
import { Pagination } from '../components/Pagination';

export const Tranding = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchTrending(page).then(response => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  }, [page]);

  useEffect(() => {
    if (params.page) {
      setPage(params.page);
      return;
    }
    setPage(1);
  }, [params]);

  const changePage = newPage => {
    navigate(`/tranding/${newPage}`);
  };

  return (
    <Section title="Tranding movies this week">
      {movies && (
        <>
          <MoviesList movies={movies} />
          <Pagination
            page={page}
            totalPages={totalPages}
            changePage={changePage}
          />
        </>
      )}
    </Section>
  );
};
