import React, { useState } from 'react';

Counter.propTypes = {

};

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(x => x + 1)}>KQ sau khi công 1: {count}</button>
        </div>
    );
}

export default Counter;