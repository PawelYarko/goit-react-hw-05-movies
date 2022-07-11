import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react";


const AppBar = lazy(() => import("../AppBar/AppBar"));
  const Home = lazy(() => import("../../views/Home"));
  const Movies = lazy(() => import("../../views/Movies"));
  const MovieDetails = lazy(() => import("../MovieDetails/MovieDetails"));
  const Cast = lazy(() => import("../Cast/Cast"));
  const Reviews = lazy(() => import("../Reviews/Reviews"));
  const NotFound = lazy(() => import("../../views/NotFound"));


const App = () => {
  
  return (
    <>
      <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" exact element={<Home />} /> 
         <Route path="/movies" element={<Movies />}/>

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} /> 
            <Route path="reviews" element={<Reviews />} />
          </Route>

        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </Suspense>
    </>
  );
}

export {App};