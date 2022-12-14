import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="box">
                box1
                <Link to="/watch?id=gh34">link1</Link>
            </div>
            <div className="box">
                box2
                <Link to="/watch?id=fr67">link2</Link>
            </div>
        </div>
    )
}

export default Home