import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const data = [
  {
    id: 1,
    name: 'First movie',
  },
  {
    id: 2,
    name: 'Second movie',
  },
  {
    id: 3,
    name: 'Third movie',
  },
];

export default function Example3() {
  return (
    <div>
      <h1>Example 3: Map data</h1>

      <div>
        {data.map(movie => (
          <>
            <div key={movie.id}>
              <b>Name:</b> {movie.name}
            </div>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
