import useCountStore from './store';

export default function Child3() {
  const count = useCountStore(state => state.count);

  const increment = useCountStore(state => state.increment);

  return (
    <div className="child-3">
      <h3>
        <b>Child level 3: {count}</b>
      </h3>

      <button onClick={increment}>Increment from child level 3</button>
    </div>
  );
}
