/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'aqua' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/watch">Watch</Link>
                </li>
                <li>
                    <Link to="/signin">Signin</Link>
                </li>
                <li>
                    <Link to="/contact/manager">manger info</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;