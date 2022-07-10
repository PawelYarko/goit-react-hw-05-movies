import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios';
import s from './css/Home.module.css'

export default function Home() {
  const [popFilms, setPopFilms] = useState(null);

  const location = useLocation();


  useEffect(() => {
    async function get() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?api_key=38f8f0caa293ab4deac25df0604d8478'
        );
        setPopFilms(response.data.results);
      } catch (error) {
        console.log('error');
      }
    }
    get();
  }, []);
  
  return (
    <>
      <ul className={s.filmsList}>
        {popFilms &&
          popFilms.map(film => (
            <li className={s.item} key={film.id}>
              <NavLink to={{
                pathname: `movies/${film.id}`,
                state:{ from:location }
              }} className={s.popFilm} >
                <img className={s.img} src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="alt"/>
                <p>{film.original_title ?? film.title ?? film.original_name}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
