import React from "react";

import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react";

import './NavBar.css';


const NavBar = () => {

    const [search, setSeach] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!search) {
            return
        } else {
            navigate(`/search?q=${search}`)
            setSeach('');
        }
    }


    return (

        <nav id='navbar'>
            <h2>
                <Link to='/'> <BiCameraMovie />MoviesLib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme" onChange={(e) => setSeach(e.target.value)} value={search} />
                <button type="submit"><BiSearchAlt2 /></button>

            </form>
        </nav>

    )
}



export default NavBar;