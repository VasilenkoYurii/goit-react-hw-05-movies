import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from 'settings/moviesAPI';
import {
  Container,
  MoviesIdImg,
  AdditionalInfo,
  DescriptionContainer,
  AdditionalLink,
} from './MoviesId.stuled';

export const MoviesId = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const respons = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );

        const data = respons.data;

        // console.log(data.release_date.split('-')[0]);

        const movieObj = {
          title: data.title || data.name,
          average: data.vote_average,
          overview: data.overview,
          genres: data.genres.map(({ name }) => name).join(', '),
          poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          date: data.release_date.split('-')[0],
        };

        setMovie(movieObj);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      {movie ? (
        <>
          <Container>
            <MoviesIdImg src={movie.poster} alt={movie.title} />
            <DescriptionContainer>
              <h2>
                {movie.title} ({movie.date})
              </h2>
              <p>User score: {movie.average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres}</p>

              <AdditionalInfo>
                <h3>Additional information:</h3>
                <AdditionalLink
                  to={'cast'}
                  element={<div>awdawdawdawdawdfttyawd</div>}
                >
                  Cast ⇓
                </AdditionalLink>
                <AdditionalLink
                  to={'reviews'}
                  element={<div>awdawdawdawdawdfttyawd</div>}
                >
                  Reviews ⇓
                </AdditionalLink>
              </AdditionalInfo>
            </DescriptionContainer>
          </Container>

          <div>
            <Outlet />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
