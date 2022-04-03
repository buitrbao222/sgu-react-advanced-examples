import Child1 from './Child1';
import useCountStore from './store';

export default function Example2() {
  const count = useCountStore(state => state.count);

  const increment = useCountStore(state => state.increment);

  return (
    <div className="example-2">
      <h1>Example 2: Global state with Zustand</h1>

      <h2>
        <b>Parent: {count}</b>
      </h2>

      <button onClick={increment}>Increment from parent</button>

      <Child1 />
    </div>
  );
}
