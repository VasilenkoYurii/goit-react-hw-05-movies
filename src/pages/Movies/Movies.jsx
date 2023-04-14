import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from 'settings/moviesAPI';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import {
  MoviesContainer,
  MoviesSearchForm,
  MoviesSearchInput,
  MoviesSearchBtn,
  MoviesSearchIcon,
  MoviesSearchList,
  MoviesSearchItemImg,
  MoviesSearchItemPrg,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searhQuery = searchParams.get('query');

  useEffect(() => {
    if (searhQuery === null) {
      return;
    }
    const getMovieByQuery = async () => {
      try {
        const respons = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searhQuery}&page=1&include_adult=false`
        );

        const data = respons.data.results;

        const filteredData = data.map(({ id, title, name, poster_path }) => ({
          id,
          title: title || name,
          poster: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png',
        }));

        setMovies(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieByQuery();
  }, [searchParams, searhQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value.trim();
    if (query === '') {
      return;
    }
    setSearchParams({ query });
  };

  return (
    <MoviesContainer>
      <MoviesSearchForm onSubmit={e => handleSubmit(e)}>
        <MoviesSearchInput type="text" placeholder="Search images..." />
        <MoviesSearchBtn type="submit">
          <MoviesSearchIcon
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 32 32"
          >
            <path d="M11.536 0.028c-3.052 0.213-5.801 1.455-7.925 3.584-1.976 1.981-3.187 4.484-3.521 7.285-0.384 3.205 0.502 6.43 2.465 8.991 0.454 0.594 1.256 1.429 1.821 1.903 0.792 0.66 1.608 1.186 2.558 1.648 1.347 0.655 2.638 1.013 4.301 1.194 0.459 0.048 1.806 0.040 2.32-0.013 1.763-0.188 3.408-0.707 4.885-1.54l0.246-0.14 0.218 0.213c0.12 0.115 2.019 1.961 4.221 4.098 2.199 2.139 4.058 3.94 4.128 4.003 0.569 0.507 1.329 0.78 2.051 0.74 0.451-0.025 0.732-0.1 1.154-0.306 0.331-0.163 0.534-0.313 0.81-0.599 0.855-0.89 1.071-2.204 0.544-3.318-0.155-0.331-0.336-0.579-0.652-0.9-0.15-0.153-2.079-2.026-4.281-4.158-2.204-2.134-4.008-3.89-4.008-3.9 0-0.013 0.063-0.128 0.138-0.256 0.339-0.567 0.707-1.367 0.945-2.041 0.456-1.294 0.68-2.49 0.715-3.862 0.050-2.021-0.359-3.925-1.231-5.718-0.599-1.231-1.307-2.24-2.247-3.208-0.95-0.976-1.991-1.743-3.197-2.362-1.979-1.013-4.273-1.49-6.458-1.337zM12.795 4.976c1.199 0.050 2.508 0.487 3.574 1.191 3.426 2.267 4.379 6.776 2.149 10.184-0.554 0.848-1.307 1.6-2.167 2.164-2.237 1.47-5.146 1.592-7.481 0.319-1.846-1.006-3.175-2.706-3.681-4.707-0.171-0.675-0.208-0.998-0.208-1.788 0-0.592 0.008-0.742 0.058-1.053 0.123-0.792 0.319-1.427 0.652-2.119 0.379-0.787 0.82-1.404 1.444-2.031 1.161-1.166 2.631-1.898 4.251-2.119 0.226-0.033 0.89-0.070 1.016-0.058 0.043 0.003 0.218 0.013 0.394 0.018z"></path>
          </MoviesSearchIcon>
        </MoviesSearchBtn>
      </MoviesSearchForm>

      {movies ? (
        <MoviesSearchList>
          {movies.map(({ id, title, poster }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <MoviesSearchItemImg src={poster} alt={title} />
                  <MoviesSearchItemPrg>{title}</MoviesSearchItemPrg>
                </Link>
              </li>
            );
          })}
        </MoviesSearchList>
      ) : (
        <></>
      )}
    </MoviesContainer>
  );
};

export default Movies;
