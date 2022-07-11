import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation} from 'react-router-dom';
import axios from 'axios';
// import GoBackButton from '../components/GoBackButton/GoBackButton'
import s from './css/Movies.module.css';

export default function Movies() {
  const [searchRequest, setSearchRequest] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    async function get() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US&page=1&include_adult=false&query=${query}`
        );
        setSearchRequest(response.data.results);
      } catch (error) {
        console.log('error');
      }
    }
    get();
  }, [query]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;

    if (value.trim() === '') {
      return;
    }
    setSearchParams({ query: value });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          className={s.input}
          autoFocus
          placeholder="Search films"
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <ul className={s.filmsList}>
        {searchRequest &&
          searchRequest.map(item => (
            <li key={item.id} className={s.item}>
              <NavLink to={`${item.id}`} state={{ from: location }} className={s.film}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${
                    item.backdrop_path || '/2f2denPrX62TjWJKVD9i2dum164.jpg'
                  } `}
                  alt="alt"
                />
                <p>{item.original_title ?? item.title ?? item.original_name}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
