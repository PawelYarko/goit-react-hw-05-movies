import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  

  useEffect(() => {
    async function get() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log('error');
      }
    }
    get();
  }, [movieId]);

  // console.log(movieId)
  return (
    <div className={s.container}>
      {cast === null ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        cast.map(character => (
          <div className={s.card} key={character.id}>
            <img
              className={s.img}
              src={
                character.profile_path &&
                `https://image.tmdb.org/t/p/w500${character.profile_path}`
              }
              alt=""
            />
            <h2>{character.character}</h2>
            <p>{character.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
