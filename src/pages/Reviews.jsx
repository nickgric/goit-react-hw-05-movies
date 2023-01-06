import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../utils/fetchAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId, 1).then(response => {
      setReviews(response.data.results);
    });
  }, [movieId]);

  return (
    reviews && (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Reviews;
