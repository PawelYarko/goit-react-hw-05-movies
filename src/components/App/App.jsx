import { Routes, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Home from '../../views/Home';
import Movies from '../../views/Movies';
import NotFound from '../../views/NotFound';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}
