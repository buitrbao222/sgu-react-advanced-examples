import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

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
      {loading && <b>Loading...</b>}

      {error && (
        <div>
          <b>Lỗi:</b> {JSON.stringify(error)}
        </div>
      )}

      {movie && (
        <div>
          <div>
            <b>Tên phim:</b> {movie.nameEn}
          </div>

          <hr />

          <div>
            <b>Ngày ra mắt:</b> {moment(movie.releaseDate).format('DD/MM/YYYY')}
          </div>

          <hr />

          <div>
            <b>Nội dung:</b> {movie.summary}
          </div>
        </div>
      )}
    </div>
  );
}
