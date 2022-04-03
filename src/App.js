import { Routes, Route } from 'react-router-dom';
import Example1 from './examples/Example1';
import Home from './Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/1" element={<Example1 />} />
    </Routes>
  );
}
