import * as React from 'react';
import { Link } from 'react-router-dom';


const Home = (props: HomeProps) => {


    return (
        <div className="home">
        <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Welcome to Amanda's Pet Sitting Services!</h1>
            <div className="container px-2 mx-auto mt-14">
                    <div className="flex-1 px-5 py-5 m-2 text-center border border-gray-300 rounded">
                        <div className="lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <img className="rounded-lg max-w-80 max-h-96" src="/images/catbook.jpg" alt="catbook" />
                            </div>
                            <div className="mt-4 lg:mt-0 lg:ml-6">
                                <div className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                                    Appointments
                             </div>
                             <div className="block mt-6 text-lg font-semibold leading-tight text-gray-900">
                                    Quality, trusted pet sitting care provided by an experienced veterinary technician!
                                </div>
                                <div className="mt-6">
                                <Link to= '/events' >
                                <button className="inline-block px-4 py-2 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Schedule an appointment</button>
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-5 py-5 m-2 text-center border border-gray-300 rounded">
                        <div className="lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <img className="rounded-lg max-w-80 max-h-96" src="/images/catnailtrim.jpg" alt="catnailtrim" />
                            </div>
                            <div className="mt-4 lg:mt-0 lg:ml-6">
                                <div className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                                    Services
                             </div>
                             <div className="block mt-6 text-lg font-semibold leading-tight text-gray-900">
                                    From overnight care to nail trims we offer a variety of services for your dog or cat!
                                </div>
                                <div className="mt-6">
                                <Link to= '/services' >
                                <button className="inline-block px-4 py-2 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">View all services</button>
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                </div>
                </div>

        </div>
    );
}

interface HomeProps { }

export default Home;