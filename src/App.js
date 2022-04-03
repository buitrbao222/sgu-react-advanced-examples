import { Routes, Route } from 'react-router-dom';
import Example1 from './example-1/Example1';
import Example2 from './example-2/Example2';
import Home from './Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/1" element={<Example1 />} />

      <Route path="/2" element={<Example2 />} />
    </Routes>
  );
}
