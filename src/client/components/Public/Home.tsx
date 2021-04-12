import * as React from 'react';
import { Link } from 'react-router-dom';


const Home = (props: HomeProps) => {


    return (
        <>
        <h1 className="flex justify-center mt-8 text-2xl font-bold text-indigo-300 border border-indigo-300">Welcome to Amanda's Pet Sitting Services!</h1>
            <div className="container px-2 mx-auto mt-8">
                <div className="md:flex">
                    <div className="flex-1 px-5 py-5 m-2 text-center text-gray-700 bg-gray-400 rounded">
                        <div className="lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/catbook.jpg" alt="catbook" />
                            </div>
                            <div className="mt-4 lg:mt-0 lg:ml-6">
                                <div className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                                    Appointments
                             </div>
                                <Link
                                    to= '/events'
                                    className="block mt-1 text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                        Click here to get an appointment scheduled!
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-5 py-5 m-2 text-center text-gray-700 bg-gray-400 rounded">
                        <div className="lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/nailtrim.jpg" alt="nailtrim" />
                            </div>
                            <div className="mt-4 lg:mt-0 lg:ml-6">
                                <div className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                                    Services
                                </div>
                            

                                <Link
                                    to= '/services'
                                    className="block mt-1 text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                    View all available services offered for your dog or cat!
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </>
    );
}

interface HomeProps { }

export default Home;