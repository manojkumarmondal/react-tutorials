import { useState } from 'react';

const Box = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <h1>form</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={event => setUserName(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <br />
                <button type="submit">save</button>
            </form>
        </>
    )
};

export default Box