import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MoviesDatails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>awdawdawdawdawdfttyawd</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>wsx</div>} />
          <Route path="reviews" element={<div>awdak,dwdawd</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
