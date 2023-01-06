import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HomeworkTitle } from './HomeworkTitle';
import { Navigation } from './Navigation';
import { Section } from './Section';

const Actors = lazy(() => import('../pages/Actors'));
const Tranding = lazy(() => import('../pages/Tranding'));
const Movie = lazy(() => import('../pages/Movie'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Search = lazy(() => import('../pages/Search'));
const About = lazy(() => import('../pages/About'));

export const App = () => {
  return (
    <>
      <HomeworkTitle title="React-HW05 '🅼OVIES' @nickgric" />
      <Navigation />
      <Suspense fallback={<Section title="Loading..." />}>
        <Routes>
          <Route path="/" element={<Tranding />} />
          <Route path="/tranding" element={<Tranding />} />
          <Route path="/tranding/:page" element={<Tranding />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query/:page" element={<Search />} />
          <Route path="/movies/" element={<Movies />}></Route>
          <Route path="/movies/:movieSlug/:movieId" element={<Movie />}>
            <Route path="actors" element={<Actors />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
