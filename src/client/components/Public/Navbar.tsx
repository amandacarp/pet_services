import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <>
        <div className="navbar p-3">
            <Link to='/'>Home</Link>
            <Link to='/events'> View Events </Link>
           <Link to='/register'> Register </Link>
           <Link to='/login'> Login </Link>
           <Link to='/profile'> Profile </Link>
        </div>

        </>
    )
}


export default Navbar;