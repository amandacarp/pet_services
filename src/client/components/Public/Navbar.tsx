import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-800">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <span className="text-xl font-bold">Pet Services</span>
            </div>

            <div className="flex-grow block w-full sm:flex sm:items-center sm:w-auto">

                <div className="text-sm sm:flex-grow">

                    <Link className="block mt-4 mr-4 text-indigo-200 sm:inline-block sm:mt-0 hover:text-white" to='/'>Home</Link>

                    <Link className="block mt-4 mr-4 text-indigo-200 sm:inline-block sm:mt-0 hover:text-white" to='/events'> Appointments </Link>

                    <Link className="block mt-4 mr-4 text-indigo-200 sm:inline-block sm:mt-0 hover:text-white" to='/services'> Services </Link>

                    <Link className="block mt-4 mr-4 text-indigo-200 sm:inline-block sm:mt-0 hover:text-white" to='/contact'> Contact Me </Link>

                    <Link className="block mt-4 mr-4 text-indigo-200 sm:inline-block sm:mt-0 hover:text-white" to='/profile'> Profile </Link>


                </div>
            </div>

            <Link className="inline-block px-4 py-2 mt-4 mr-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0" to='/register'> Register </Link>

            <Link className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0" to='/login'> Login </Link>



        </nav>

    )
}


export default Navbar;