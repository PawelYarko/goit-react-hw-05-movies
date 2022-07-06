import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import s from './Cast.module.css'

export default function Cast (){
  const [cast, setCast] = useState(null);
    const {movieId} = useParams();
    
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => setCast(data.cast)); 
  }, [movieId]);

  // console.log(movieId)
    return(
        <div className={s.container}>
        {cast && cast.map(character => 
        <div className={s.card} key={character.id}>
          <img className={s.img} src={character.profile_path && `https://image.tmdb.org/t/p/w500${character.profile_path}`} alt=""/>
          <h2>{character.character}</h2>
          <p>{character.name}</p>
        </div>
          )}
        
        </div>
    );
}