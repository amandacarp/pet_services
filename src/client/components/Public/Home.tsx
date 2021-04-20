import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = (props: HomeProps) => {

    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState(null);

    useEffect(() => {
       fetch('https://api.thecatapi.com/v1/images/search')
       .then(res => res.json())
       .then(cats => setCats(cats))
       .catch(e => console.log(e));
       fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dogs => setDogs(dogs))
       .catch(e => console.log(e));
    }, [])

    // useEffect(() => {
    //     fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(res => res.json())
    //     .then(dogs => setDogs(dogs))
    //     .catch(e => console.log(e));
    //  }, [])

    const newCat = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(cats => setCats(cats))
        .catch(e => console.log(e));
    }

    const newDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dogs => setDogs(dogs))
        .catch(e => console.log(e));
    }

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
                    <div className="flex-1 px-5 py-5 m-2 mt-6 text-center border border-gray-300 rounded">
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

                <div className="justify-around mb-20 md:flex">
        {cats?.map(cat => {
            return(
                <div key={cat?.id}>
                <div className="mt-14">
                <img className='rounded-lg max-w-80 max-h-96' src={cat?.url} alt="cat"/>
                </div>
                 <div className='flex justify-center mt-6'>
                 <button onClick={newCat} className="inline-block px-4 py-2 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">New Kitty!</button>
                 </div>
                 </div>
            )
        })}

        
                <div key={dogs?.message}>
                <div className="mt-14">
                <img className='rounded-lg max-w-80 max-h-96' src={dogs?.message} alt="dog"/>
                </div>
                 <div className='flex justify-center mt-6'>
                 <button onClick={newDog} className="inline-block px-4 py-2 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">New Puppy!</button>
                 </div>
                 </div>
        </div>

        </div>
    );
}

interface HomeProps { }

export default Home;