import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from 'settings/moviesAPI';
import { useState, useEffect } from 'react';
import { CastList, CasstItem, CastItemImg } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCastById = async () => {
      try {
        const respons = await axios.get(
          `https://api.themoviedb.org/3/movie//${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );

        const data = respons.data.cast;
        const filteredData = data.map(
          ({ character, id, name, profile_path }) => ({
            id,
            name,
            character,
            profile: profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://e7.pngegg.com/pngimages/491/220/png-clipart-woman-question-mark-mysterious-people-woman.png',
          })
        );

        setCast(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCastById();
  }, [movieId]);

  return (
    <>
      {cast !== null && cast.length !== 0 ? (
        <CastList>
          {cast.map(({ id, name, character, profile }) => {
            return (
              <CasstItem key={id}>
                <CastItemImg src={profile} alt={name} />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </CasstItem>
            );
          })}
        </CastList>
      ) : (
        <p>Sorry, but we don't have a list of cast for this movie.</p>
      )}
    </>
  );
};
