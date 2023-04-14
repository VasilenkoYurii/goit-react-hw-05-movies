import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from 'settings/moviesAPI';
import {
  Container,
  MoviesPopItem,
  MoviesPopItemImg,
  MoviesPopItemPrg,
  MoviesPopList,
  PageTitle,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getPopMovies = async () => {
      try {
        const respons = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        const data = respons.data.results;
        const filteredData = data.map(({ id, title, name, poster_path }) => ({
          id,
          title: title || name,
          poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        }));

        setMovies(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getPopMovies();
  }, []);

  return (
    <Container>
      <PageTitle>Tranding today</PageTitle>
      <MoviesPopList>
        {movies.map(({ id, title, poster }) => {
          return (
            <MoviesPopItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <MoviesPopItemImg src={poster} alt={title} />
                <MoviesPopItemPrg>{title}</MoviesPopItemPrg>
              </Link>
            </MoviesPopItem>
          );
        })}
      </MoviesPopList>
    </Container>
  );
};

export default Home;
