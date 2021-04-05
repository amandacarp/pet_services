import * as React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../../utils/api-service';
import { Event } from '../../../common/types';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Events = (props: EventsProps) => {

    const [events, setEvents] = useState<Event>(null);

    useEffect(() => {
        apiService('/api/events')
            .then(events => setEvents(events))
    }, [])


    return (
        <>
        <section className="flex justify-center mt-6 ml-6 text-2xl font-bold text-indigo-300">All Appointments</section>
        
        <div className="flex flex-wrap justify-center mt-6 overflow-hidden">
        <table className="w-1/2 text-xs text-gray-800 bg-gray-300 border border-separate border-white table-auto md:text-lg">
                <thead>
                    <tr>
                        <th className="text-center border border-indigo-600">Owner Name</th>
                        <th className="text-center border border-indigo-600">Pet Name</th>
                        <th className="text-center border border-indigo-600">Title</th>
                        <th className="text-center border border-indigo-600">Service</th>
                        <th className="text-center border border-indigo-600">Date(s)</th>
                        <th className="text-center border border-indigo-600">Time(s)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events?.map((event: Event) => {
                        return (
                            <tr key={event?.id}>
                                <td className="text-center border border-indigo-600">{event?.owner_name}</td>
                                <td className="text-center border border-indigo-600">{event?.pet_name}</td>
                                <td className="text-center border border-indigo-600">{event?.title}</td>
                                <td className="text-center border border-indigo-600">{event?.name}</td>
                                <td className="text-center border border-indigo-600">{moment(event?.start_date).add(10, 'days').calendar()} {event?.end_date === null ? '' : 'to ' + moment(event?.end_date).add(10, 'days').calendar()}</td>
                                <td className="text-center border border-indigo-600">{event?.time}</td>
                                                         
                            </tr>
                        )

                    })}
                    </tbody>
            </table>
            
            </div>
            <div className="flex flex-wrap justify-center mt-4">
            <Link className="inline-block px-4 py-2 mt-6 leading-none text-indigo-600 bg-gray-300 rounded shadow md:text-lg hover:text-indigo-700 hover:bg-white" to="/add/event" >Add Appointment</Link>
            </div>
            </>
    );
}

interface EventsProps { }

export default Events;