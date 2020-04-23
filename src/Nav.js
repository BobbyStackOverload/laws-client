import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Damn Laws</h3>
            <ul className="nav-links">
                <Link style={navStyle} to ='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/laws'>
                    <li>Laws</li>
                </Link>  
                <Link style={navStyle} to='/laws/types'> 
                    <li>Types of laws</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;