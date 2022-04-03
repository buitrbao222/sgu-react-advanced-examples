import { Routes, Route } from 'react-router-dom';
import Example1 from './example-1/Example1';
import Example2 from './example-2/Example2';
import Example3 from './example-3/Example3';
import Example4 from './example-4/Example4';
import Example5 from './example-5/Example5';
import Home from './Home';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/1" element={<Example1 />} />

      <Route path="/2" element={<Example2 />} />

      <Route path="/3" element={<Example3 />} />

      <Route path="/4" element={<Example4 />} />

      <Route path="/5" element={<Example5 />} />
    </Routes>
  );
}
