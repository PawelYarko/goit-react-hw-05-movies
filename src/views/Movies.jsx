import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './css/Movies.module.css'

export default function Movies() {
  const [filmsNames, setFilmsNames] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [searchRequest, setSearchRequest] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US&page=1&include_adult=false&query=${filmsNames}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => setSearchRequest(data.results));
  }, [filmsNames]);

  const handleInputFormChange = e => {
    const value = e.currentTarget.value.toLowerCase();
    setInputValue(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }
    setFilmsNames(inputValue);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputFormChange}
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
      <ul>
        {searchRequest &&
          searchRequest.map(item => (
            <li key={item.id}>
              <NavLink to={`movies/${item.id}`}>
                {item.original_title ?? item.title}
              </NavLink>
              
              </li>
          ))}
      </ul>
    </>
  );
}
