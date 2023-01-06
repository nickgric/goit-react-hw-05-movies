import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { fetchTrending } from '../utils/fetchAPI';

import { Section } from '../components/Section';
import { MoviesList } from 'components/MoviesList';
import { Pagination } from '../components/Pagination';

const Tranding = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    fetchTrending(page).then(response => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  }, [page]);

  useEffect(() => {
    console.log(totalPages);
    if (params.page > totalPages) {
      return;
    }
    if (location.pathname === '/tranding') {
      navigate(`/tranding/2`);
      return;
    }
    if (location.pathname === '/tranding/1') {
      navigate(`/`);
      setPage(1);
      return;
    }
    if (params.page) {
      setPage(params.page);
      return;
    }
    setPage(1);
  }, [params, totalPages, location, navigate]);

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

export default Tranding;
