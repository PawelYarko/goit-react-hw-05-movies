import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './css/Home.module.css'

export default function Home() {
  const [popFilms, setPopFilms] = useState(null);

  // const match = useMatch();
  // console.log(match)

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=38f8f0caa293ab4deac25df0604d8478'
    )
      .then(response => {
        return response.json();
      })
      .then(data => setPopFilms(data.results));
  }, []);
  {
    /* <HomeCollectionItem film={film}/> {`${url}/${film.id}`}*/
  }
  return (
    <>
      <ul className={s.filmsList}>
        {popFilms &&
          popFilms.map(film => (
            <li className={s.item} key={film.id}>
              <NavLink to={`movies/${film.id}`} className={s.popFilm} >
                <img className={s.img} src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}/>
                <p>{film.original_title ?? film.title ?? film.original_name}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
