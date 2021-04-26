import * as React from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { ProfileEvents, ProfileInfo, Pet } from '../../../common/types';
import apiService, { logout } from '../../utils/api-service';
import { Link } from 'react-router-dom';

const Profile = (props: ProfileProps) => {

    const [info, setInfo] = useState<ProfileInfo>(null);
    const [pets, setPets] = useState<Pet[]>([]);
    const [events, setEvents] = useState<ProfileEvents[]>([]);    
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

    useEffect(() => {
        apiService('/api/users/profile')
            .then(result => {
                setInfo(result.profile);
                setPets(result.pets);
                setEvents(result.events);
            })
    }, [])

    return (
        <>
            <div className="flex justify-end mt-5 md:px-2 md:py-2">
                    <button onClick={logout} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Logout</button>
                </div>
            <div className='flex items-center justify-around'>
                <div className='flex flex-col text-center'>
                <h1 className="text-2xl font-bold text-indigo-700">Welcome,</h1>
                <h1 className="text-2xl font-bold text-indigo-700">{info?.owner_name}</h1>
                </div>
                <div className="flex justify-end">
                {cats?.map(cat => {
                    return (
                        <div key={cat?.id}>
                            <div className="mr-4 mt-14">
                                <img className='rounded-lg max-w-48 max-h-56' src={cat?.url} alt="cat" />
                            </div>
                           
                        </div>
                    )
                })}
                </div>
            </div>


            <div className="flex flex-wrap justify-center px-2 mx-auto mt-5 mb-8 overflow-hidden">
                <div className="w-full overflow-hidden lg:my-8 lg:px-8 lg:w-1/2">
                    <div className="px-5 py-5 mt-5 text-gray-800 bg-gray-300 border rounded shadow">
                        <h1 className="text-2xl font-bold text-indigo-700 border border-t-0 border-l-0 border-r-0 border-indigo-300">Your Appointments</h1>
                        {events.length === 0 ? <h1>No Appointments</h1> :
                            <table className="w-full mt-3 text-xs md:text-lg">
                                <thead>
                                    <tr>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Pet</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Service</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Date(s)</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events?.map((event) => {
                                        return (
                                            <tr key={event?.id}>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/event/${event?.id}`}>{event?.pet_name}</Link></td>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/event/${event?.id}`}>{event?.name}</Link></td>
                                                <td className="text-center md:px-2 md:py-2">
                                                    <Link to={`/event/${event?.id}`}>{moment(event?.start_date).add(10, 'days').calendar()} {event?.end_date === null ? '' : 'to ' + moment(event?.end_date).add(10, 'days').calendar()}</Link>
                                                </td>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/event/${event?.id}`}>{event?.time}</Link></td>

                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>
                        }
                        <div className="mt-5 text-center md:px-2 md:py-2">
                            <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">
                                <Link to={`/add/event`}>Schedule</Link>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="w-full overflow-hidden lg:my-8 lg:px-8 lg:w-1/2">
                    <div className="px-5 py-5 mt-5 text-gray-800 bg-gray-300 border rounded shadow">
                        <h1 className="text-2xl font-bold text-indigo-700 border border-t-0 border-l-0 border-r-0 border-indigo-300">Your Pets</h1>
                        {pets.length === 0 ? <h1>No Pets</h1> :
                            <table className="w-full mt-3 text-xs table-auto md:text-lg">
                                <thead>
                                    <tr>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Pet</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Breed</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Age</th>
                                        <th className="font-extrabold text-center text-indigo-500 md:text-xl">Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pets?.map((pet: Pet) => {
                                        return (
                                            <tr key={pet?.id}>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/pet/${pet?.id}`}>{pet?.pet_name}</Link></td>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/pet/${pet?.id}`}>{pet?.pet_breed}</Link></td>
                                                <td className="text-center md:px-2 md:py-2"><Link to={`/pet/${pet?.id}`}>{pet?.pet_age}</Link></td>
                                                <td className="flex justify-center md:px-2 md:py-2"><Link to={`/pet/${pet?.id}`}><img src={pet?.pet_photo} style={{ maxHeight: '70px', maxWidth: '70px' }} /></Link></td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>
                        }
                        <div className="mt-5 text-center md:px-2 md:py-2">
                            <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">
                                <Link to={`/add/pet`}>Add Pet</Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

interface ProfileProps { }

export default Profile;