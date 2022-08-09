import { useState } from 'preact/compat';

const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);

export default () => (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
);