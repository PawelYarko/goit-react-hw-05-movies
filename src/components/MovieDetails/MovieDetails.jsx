import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import GoBackButton from '../GoBackButton/GoBackButton'
import s from './MovieDetails.module.css';

const MovieDetails = () =>{
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  
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
    <GoBackButton to={backLinkHref}/>
      {movie && (
        <>
          <div className={s.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path  || '/2f2denPrX62TjWJKVD9i2dum164.jpg'}`}
              alt="alt"
              className={s.img}
            />
            <div className={s.descr}>
              <h2>
                {movie.original_title} {movie.release_date.slice(0, 4)}
              </h2>
              <p>User Score: {Number(movie.vote_average) * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {movie.genres.map(({name})=> <span>{name} </span>)}
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

export default MovieDetails;