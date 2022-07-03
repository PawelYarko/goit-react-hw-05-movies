import { Routes, Route } from "react-router-dom"
import AppBar from '../AppBar/AppBar'
import Home from '../../views/Home'
import Movies from '../../views/Movies'
import NotFound from '../../views/NotFound'
import fetchRequest from '../../service/fetchRequest'


export const App = () => {

  // fetchRequest()
  // .then(response =>
  //   console.log(response))




  return (
    <div>
      <AppBar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
