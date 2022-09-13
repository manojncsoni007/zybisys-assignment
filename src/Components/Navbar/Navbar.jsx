import React from 'react'
import { useData } from '../../Context/data-context'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const { searchTerm, setSearchTerm } = useData();
    const { pathname } = useLocation();
    return (
        <div className="navbar">
            <h1><Link to='/'>Anime Library</Link></h1>
            {pathname == '/' && <input
                type='text'
                className='search-bar'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search Here !' />}

        </div>
    )
}

export default Navbar