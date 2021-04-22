import * as React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../../utils/api-service';
import { Event } from '../../../common/types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';


const SingleEvent = (props: SingleEventProps) => {

    const [event, setSingleEvent] = useState<Event>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        apiService(`/api/events/${id}`)
            .then(event => setSingleEvent(event[0]))
    }, [id])


    return (
        <>
            <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Your Appointment</h1>

            <div className="flex flex-wrap justify-center px-2 mx-auto mt-5 overflow-hidden">
                <div className="px-5 py-5 m-2 text-center text-gray-800 bg-gray-300 border rounded shadow">

                    <table className="w-1/2 mt-3 text-xs table-auto md:text-lg lg:w-full">
                        <thead>
                            <tr>
                                <th className="font-extrabold text-center text-indigo-500 md:text-xl">Pet</th>
                                <th className="font-extrabold text-center text-indigo-500 md:text-xl">Service</th>
                                <th className="font-extrabold text-center text-indigo-500 md:text-xl">Description</th>
                                <th className="font-extrabold text-center text-indigo-500 md:text-xl">Date(s)</th>
                                <th className="font-extrabold text-center text-indigo-500 md:text-xl">Time</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr key={event?.id}>
                                <td className="text-center md:px-2 md:py-2">{event?.pet_name}</td>
                                <td className="text-center md:px-2 md:py-2">{event?.name}</td>
                                <td className="text-center md:px-2 md:py-2">{event?.description}</td>
                                <td className="text-center md:px-2 md:py-2">
                                    {moment(event?.start_date).add(10, 'days').calendar()} {event?.end_date === null ? '' : 'to ' + moment(event?.end_date).add(10, 'days').calendar()}
                                </td>
                                <td className="text-center md:px-2 md:py-2">{event?.time}</td>
                                <td className="text-center md:px-2 md:py-2"><button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0"><Link to={`/event/${event?.id}/edit`}>Edit</Link></button></td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

interface SingleEventProps { }

export default SingleEvent;