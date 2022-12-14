import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const query = useLocation();

    useEffect(() => {
        console.log(query);
    }, [query])
    return (
        <div>watch</div>
    )
}

export default Contact