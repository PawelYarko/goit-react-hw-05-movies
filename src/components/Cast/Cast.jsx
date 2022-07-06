import { useState, useEffect } from 'react'
import { useParams, useRoutes } from 'react-router-dom';


export default function Cast ({movieId}){
  const [cast, setCast] = useState(null);
    const params = useParams()
    console.log(params)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => setCast(data)); 
  }, [movieId]);

  console.log(cast)
    return(
        <>
        </>
    );
}