import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Example1() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState();

  const [movie, setMovie] = useState();

  async function loadData() {
    setLoading(true);

    try {
      const response = await axios.get('/movie/filter');

      setMovie(response.data[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>Example 1: Fetch data from api</h1>

      {loading && <b>Loading...</b>}

      {error && (
        <div>
          <b>Lỗi:</b> {JSON.stringify(error)}
        </div>
      )}

      {movie && (
        <div>
          <div>
            <b>Name:</b> {movie.nameEn}
          </div>

          <hr />

          <div>
            <b>Release date:</b>{' '}
            {moment(movie.releaseDate).format('DD/MM/YYYY')}
          </div>

          <hr />

          <div>
            <b>Summary:</b> {movie.summary}
          </div>
        </div>
      )}
    </div>
  );
}
