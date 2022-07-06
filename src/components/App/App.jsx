import { Routes, Route } from 'react-router-dom'
import AppBar from '../AppBar/AppBar'
import Home from '../../views/Home'
import Movies from '../../views/Movies'
import {MovieDetails} from '../MovieDetails/MovieDetails'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import NotFound from '../../views/NotFound'

const App = () => {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/movies" element={<Movies />}/>

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} /> 
            <Route path="reviews" element={<Reviews />} />
          </Route>

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export {App};