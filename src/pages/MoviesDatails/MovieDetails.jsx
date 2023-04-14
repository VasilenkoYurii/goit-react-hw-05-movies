import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import axios from 'axios';
import { API_KEY } from 'settings/moviesAPI';
import {
  Container,
  MoviesIdImg,
  AdditionalInfo,
  DescriptionContainer,
  AdditionalLink,
  MovieDatailsContainer,
  LoaderContainer,
} from './MoviesDatails.styles';
import { ErrorMassage } from 'components/ErrorMassage/ErrorMassage';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [errorMas, setErrorMas] = useState(null);
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
        setErrorMas(
          'Sorry, but there is no detailed information about this movie, choose another movie =('
        );
      }
    };

    getMovieById();
  }, [movieId]);

  console.log(movie);

  return (
    <MovieDatailsContainer>
      {movie ? (
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

            <div>
              <Outlet />
            </div>
          </DescriptionContainer>
        </Container>
      ) : (
        (errorMas === null && (
          <LoaderContainer>
            <Circles
              height="80"
              width="80"
              color="#ff0068"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </LoaderContainer>
        )) || <ErrorMassage massage={errorMas} />
      )}
    </MovieDatailsContainer>
  );
};
