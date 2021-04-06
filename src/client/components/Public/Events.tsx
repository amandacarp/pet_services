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
            <section className="flex justify-center mt-6 ml-6 text-2xl font-bold text-indigo-300">Appointments</section>

            <div className="flex flex-wrap justify-center px-2 mx-auto mt-5 overflow-hidden">
                <div className="px-5 py-5 m-2 text-center text-gray-800 bg-gray-300 rounded">
                <table className="w-1/2 text-xs table-auto md:text-lg lg:w-full">
                        <thead>
                            <tr>
                                <th className="text-center md:text-xl">Owner</th>
                                <th className="text-center md:text-xl">Pet</th>
                                <th className="text-center md:text-xl">Title</th>
                                <th className="text-center md:text-xl">Service</th>
                                <th className="text-center md:text-xl">Date(s)</th>
                                <th className="text-center md:text-xl">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events?.map((event: Event) => {
                                return (
                                    <tr key={event?.id}>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{event?.owner_name}</td>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{event?.pet_name}</td>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{event?.title}</td>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{event?.name}</td>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{moment(event?.start_date).add(10, 'days').calendar()} {event?.end_date === null ? '' : 'to ' + moment(event?.end_date).add(10, 'days').calendar()}</td>
                                        <td className="text-center border border-indigo-600 md:px-2 md:py-2">{event?.time}</td>

                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                    <div className="mt-5 text-center md:px-2 md:py-2"><button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-indigo-400 border border-indigo-400 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0"><Link to={`/add/event`}>Schedule</Link></button></div>

                </div>
                </div>

                

                <div className="flex flex-wrap justify-center mt-6 overflow-hidden">
                    <table className="w-1/2 text-xs text-gray-800 bg-gray-300 border border-separate border-white table-auto md:text-lg">
                        <thead>
                            <tr>
                                <th className="text-center border border-indigo-600">Owner</th>
                                <th className="text-center border border-indigo-600">Pet</th>
                                <th className="text-center border border-indigo-600">Title</th>
                                <th className="text-center border border-indigo-600">Service</th>
                                <th className="text-center border border-indigo-600">Date(s)</th>
                                <th className="text-center border border-indigo-600">Time</th>
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
        </>
    );
}

interface EventsProps { }

export default Events;