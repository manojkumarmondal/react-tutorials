import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Watch';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
import Notfound from './pages/Notfound';
import Manager from './pages/Manager';

const Routing = () => {
    return (
        <section>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/watch' element={<Contact />} />
                <Route path='/contact/manager' element={<Manager />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </section>
    )
}

export default Routing