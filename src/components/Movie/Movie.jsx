import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiMov } from 'services/Api';

export default function Movie() {
  const { movId } = useParams();

  useEffect(() => {
    apiMov(movId).then(console.log);

    //   return () => {
    //     second
    //   }
  }, [movId]);

  return <div>Movie</div>;
}
