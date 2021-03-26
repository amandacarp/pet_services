import * as React from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { ProfileEvents, ProfileInfo, Pet } from '../../../common/types';
import apiService, { logout } from '../../utils/api-service';
import { Link } from 'react-router-dom';

const Profile = (props: ProfileProps) => {

    const [info, setInfo] = useState<ProfileInfo>(null);
    const [pets, setPets] = useState<Pet>(null);
    const [events, setEvents] = useState<ProfileEvents[]>([]);

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
            <section className="row mb-4">
                <h1 className='ml-5 mt-5 text-muted'>Welcome, {info?.owner_name}</h1>
            </section>
            <section className="row mt-4">
                <section className="col-md-6">
                    <section className="card rounded border border-info bg-white mx-2 shadow d-flex justify-content-center">
                        <h4 className="col-12 text-center my-4 d-flex justify-content-around">Your Events<Link to="/add/event" className="btn btn-primary">Add Event</Link></h4>
                        <table>
                            <tbody>
                                <tr className="border">
                                    <th className="border bg-dark text-light text-center">Pet Name</th>
                                    <th className="border bg-dark text-light text-center">Title</th>
                                    <th className="border bg-dark text-light text-center">Description</th>
                                    <th className="border bg-dark text-light text-center">Service</th>
                                    <th className="border bg-dark text-light text-center">Start Date</th>
                                    <th className="border bg-dark text-light text-center">End Date</th>
                                    <th className="border bg-dark text-light text-center">Time(s)</th>
                                    <th className="border bg-dark text-light text-center">View Event</th>
                                </tr>
                                {events?.map(event => (
                                    <tr className='' key={event?.id}>
                                        <td className='p-2 text-center'>{event?.pet_name}</td>
                                        <td className='p-2 text-center'>{event?.title}</td>
                                        <td className='p-2 text-center'>{event?.description}</td>
                                        <td className='p-2 text-center'>{event?.name}</td>
                                        <td className='p-2 text-center'>{moment(event?.start_date).format('MMMM Do YYYY')}</td>
                                        <td className='p-2 text-center'> {event?.end_date === null ? '---' : moment(event?.end_date).format('MMMM Do YYYY')}</td>
                                        <td className='p-2 text-center'>{event?.time}</td>
                                        <td className='p-2 text-center'><Link to={`/event/${event?.id}`}>View Event</Link></td>
                                        
                                    </tr>

                                ))}


                            </tbody>
                        </table>

                    </section>
                </section>




                <section className="col-md-6">
                    <section className="card rounded border border-info bg-white mx-2 shadow d-flex justify-content-center">
                        <h4 className="col-12 text-center my-4 d-flex justify-content-around">Your Pets<Link to="/add/pet" className="btn btn-primary">Add Pet</Link></h4>
                        <table>
                            <tbody>
                                <tr className="border">
                                    <th className="border bg-dark text-light text-center">Pet Name</th>
                                    <th className="border bg-dark text-light text-center">Pet Age</th>
                                    <th className="border bg-dark text-light text-center">Pet Breed</th>
                                    <th className="border bg-dark text-light text-center">Pet Photo</th>
                                    <th className="border bg-dark text-light text-center">View Pet</th>
                                </tr>
                                {pets?.map((pet: Pet) => (
                                    <tr key={pet?.id}>
                                        <td className='p-2 text-center'>{pet?.pet_name}</td>
                                        <td className='p-2 text-center'>{pet?.pet_age} years</td>
                                        <td className='p-2 text-center'>{pet?.pet_breed}</td>
                                        <td className='p-2 text-center'>
                                        <img style={{maxHeight: '50px', maxWidth: '50px'}} src={pet?.pet_photo}/>
                                        </td>
                                        <td className='p-2 text-center'><Link to={`/pet/${pet?.id}`}>View Pet</Link></td>
                                        
                                    </tr>

                                ))}


                            </tbody>
                        </table>

                    </section>
                </section>
                <Link onClick={() => logout()} id="buttonSingle" className="btn shadow m-4" to='/login'>Logout</Link>
            </section>
        </>
    );
}

interface ProfileProps { }

export default Profile;