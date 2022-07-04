import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HomeCollectionItem from '../components/HomeCollectionItem/HomeCollectionItem';

export default function Home() {
  const [popFilms, setPopFilms] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=38f8f0caa293ab4deac25df0604d8478'
    )
      .then(response => {
        return response.json();
      })
      .then(data => setPopFilms(data.results));
  }, []);

  return (
    <>
      <ul>
        {popFilms &&
          popFilms.map(film => (
            <NavLink to="/movies/:movieId" key={film.id}>
              <HomeCollectionItem film={film}/>
            </NavLink>
          ))}
      </ul>
    </>
  );
}
