import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () =>{
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div className={s.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              className={s.img}
            />
            <div className={s.descr}>
              <h2>
                {movie.original_title} {movie.release_date.slice(0, 4)}
              </h2>
              <p>User Score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {/* <p>{movie.genres}</p> */}
            </div>
          </div>
          <div className={s.additional}>
            <h2 className={s.title}>Additional information</h2>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink to="cast" className={s.nav}>
                  Cast
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="reviews" className={s.nav}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export {MovieDetails};