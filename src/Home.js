import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="example-container">
      {[...Array(5)].map((_, index) => (
        <Link key={index} to={`/${index + 1}`} className="example-link">
          Example {index + 1}
        </Link>
      ))}
    </div>
  );
}
