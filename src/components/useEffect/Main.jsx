import React, { useEffect, useState } from 'react'

const Main = () => {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        console.log('I am rendered');
    }, [limit]);

    return (
        <>
            <div>Main</div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1); console.log(count) }}>clieck for count</button>
            <h2>{limit}</h2>
            <button onClick={() => { setLimit(limit + 1); console.log(limit) }}>clieck for limit</button>
        </>
    )
}

export default Main