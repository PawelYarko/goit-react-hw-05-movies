import { Routes, Route } from 'react-router-dom'
import AppBar from '../AppBar/AppBar'
import Home from '../../views/Home'
import Movies from '../../views/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import NotFound from '../../views/NotFound'

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/movies" element={<Movies />}></Route> 
        <Route path="/movies/:movieId" exact element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} /> 
          <Route path="reviews" element={<Reviews />} />
        </Route> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}
