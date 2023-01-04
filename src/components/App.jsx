import { Routes, Route } from 'react-router-dom';

// fetch
// import {
//   fetchTrending,
//   fetchSearch,
//   fetchMovie,
//   fetchActors,
//   fetchReviews,
// } from '../utils/fetchAPI';

import { Actors } from '../pages/Actors';
import { Tranding } from '../pages/Tranding';
import { Movie } from '../pages/Movie';
import { NotFound } from '../pages/NotFound';
import { Reviews } from '../pages/Reviews';
import { Search } from '../pages/Search';

import { HomeworkTitle } from './HomeworkTitle';
import { Navigation } from './Navigation';

export const App = () => {
  return (
    <>
      <HomeworkTitle title="React-HW05 '🅼OVIES' @nickgric" />
      <Navigation />

      <Routes>
        <Route path="/tranding" element={<Tranding />} />
        <Route path="/tranding/:page" element={<Tranding />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:movieSlug/:movieId" element={<Movie />}>
          <Route path="cast" element={<Actors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
