import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
        <Link to='Login'>
            <button className="buttons">Login</button>
        </Link>
        <br />
        <Link to='Register'>
            <button className="buttons">Register</button>
        </Link>
    </div>
  );
}

export default Nav;


