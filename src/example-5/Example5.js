import Memoized from './Memoized';
import NotMemoized from './NotMemoized';

export function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default function Example5() {
  return (
    <div>
      <h1>Example 5: useMemo</h1>

      <NotMemoized />

      <hr />

      <Memoized />
    </div>
  );
}
