import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from '../utils/fetchAPI';

const Actors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors(movieId).then(response => setActors(response.data.cast));
  }, [movieId]);

  return (
    actors && (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    )
  );
};

export default Actors;
