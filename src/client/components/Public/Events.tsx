import * as React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../../utils/api-service';
import { Event } from '../../../common/types';
import moment from 'moment';


const Events = (props: EventsProps) => {

    const [events, setEvents] = useState<Event>(null);

    useEffect(() => {
        apiService('/api/events')
            .then(events => setEvents(events))
    }, [])


    return (
        <>


            <table>
                <tbody>
                    <tr className="border">
                        <th className="border bg-dark text-light text-center">Owner Name</th>
                        <th className="border bg-dark text-light text-center">Pet Name</th>
                        <th className="border bg-dark text-light text-center">Title</th>
                        <th className="border bg-dark text-light text-center">Service</th>
                        <th className="border bg-dark text-light text-center">Start Date</th>
                        <th className="border bg-dark text-light text-center">End Date</th>
                        <th className="border bg-dark text-light text-center">Time(s)</th>
                        <th className="border bg-dark text-light text-center">Comments</th>
                    </tr>
                    {events?.map((event: Event) => {
                        return (
                            <tr className='' key={event?.id}>
                                <td className='p-2 text-center'>{event?.owner_name}</td>
                                <td className='p-2 text-center'>{event?.pet_name}</td>
                                <td className='p-2 text-center'>{event?.title}</td>
                                <td className='p-2 text-center'>{event?.name}</td>
                                <td className='p-2 text-center'>{moment(event?.start_date).format('MMMM Do YYYY')}</td>
                                <td className='p-2 text-center'> {event?.end_date === null ? '---' : moment(event?.end_date).format('MMMM Do YYYY')}</td>
                                <td className='p-2 text-center'>{event?.time}</td>
                                <td> <p className="text-center"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7e858d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                </svg>{event?.num_of_comments}</p></td>
                               
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </>
    );
}

interface EventsProps { }

export default Events;