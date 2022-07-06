// import { useState , useEffect} from 'react'
// import {useParams} from 'react-router-dom'

// export default function HomeCollectionItem({film}){
//    const {movieId} = useParams();
//    const [movie, setMovie] = useState(null);

//    console.log({movieId})
//    useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US`
//     )
//       .then(response => {
//         return response.json();
//       })
//       .then(data => setMovie(data.results));
//   }, [movieId]);

//     return(
//         <>

//             {movie && 
//             <> 
//                 <img />
//                 <h2></h2>
//                 <p></p>
//                 <h2>Overview</h2>
//                 <p></p>
//                 <h2>Genres</h2>
//                 <ul>
//                     <li></li>
//                 </ul>
//             </>
//             }
//         </>
//     )
// }
