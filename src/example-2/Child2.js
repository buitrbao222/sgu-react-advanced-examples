import Child3 from './Child3';
import useCountStore from './store';

export default function Child2() {
  const count = useCountStore(state => state.count);

  const increment = useCountStore(state => state.increment);

  return (
    <div className="child-2">
      <h3>
        <b>Child level 2: {count}</b>
      </h3>

      <button onClick={increment}>Increment from child level 2</button>

      <Child3 />
    </div>
  );
}
