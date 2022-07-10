import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    async function get() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US&page=1`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log('error');
      }
    }
    get();
  }, [movieId]);

  //   console.log(reviews)
  return (
    <div className={s.container}>
      {reviews === null 
        ? <p>'We dont have any reviews for this movie'</p>
        : reviews.map(content => (
            <div key={content.id}>
              <h2>Author: {content.author}</h2>
              <p>{content.content}</p>
            </div>
          ))}
    </div>
  );
}
