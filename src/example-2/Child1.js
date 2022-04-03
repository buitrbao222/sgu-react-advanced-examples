import Child2 from './Child2';
import useCountStore from './store';

export default function Child1() {
  const count = useCountStore(state => state.count);

  const increment = useCountStore(state => state.increment);

  return (
    <div className="child-1">
      <h3>
        <b>Child level 1: {count}</b>
      </h3>

      <button onClick={increment}>Increment from child level 1</button>

      <Child2 />
    </div>
  );
}
