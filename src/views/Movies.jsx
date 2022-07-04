import { useState, useEffect } from 'react';

export default function Movies() {
  const [filmsNames, setFilmsNames] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [searchRequest, setSearchRequest] = useState(null);

  useEffect(() => {
    fetch(
    //   'https://api.themoviedb.org/3/trending/all/day?api_key=38f8f0caa293ab4deac25df0604d8478'
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
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>

  {searchRequest && searchRequest.map(item =><li key={item.id}>{item.original_title ?? item.title}</li>)}
    </>
  );
}
