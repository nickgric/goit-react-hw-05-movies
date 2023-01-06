import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { fetchSearch } from '../utils/fetchAPI';

import { Section } from '../components/Section';
import { MoviesList } from '../components/MoviesList';
import { Pagination } from '../components/Pagination';
import { SearchInput } from '../components/SearchInput';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearch(query, page)
      .then(response => {
        setTotalPages(response.data.total_pages);
        setMovies(response.data.results);
      })
      .catch(error => console.log(error));
  }, [query, page]);

  useEffect(() => {
    if (params.page && params.query) {
      setPage(params.page);
      setQuery(params.query);
      return;
    }
    if (!params.page && params.query) {
      setPage(1);
      setQuery(params.query);
      return;
    }
    if (params.page && !params.query) {
      setPage(params.page);
      setQuery('Harry potter');
      return;
    }
  }, [params, totalPages, location]);

  const changePage = newPage => {
    navigate(`/search/${query}/${newPage}`);
  };

  const changeQuery = newQuery => {
    setQuery(newQuery);
    setPage(1);
    navigate(`/search/${newQuery}/1`);
  };

  return (
    <Section title="Your movie search engine">
      <SearchInput changeQuery={changeQuery} />
      {movies && query && (
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

export default Search;
