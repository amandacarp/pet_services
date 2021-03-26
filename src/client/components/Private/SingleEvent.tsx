import * as React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../../utils/api-service';
import { Event } from '../../../common/types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';


const SingleEvent = (props: SingleEventProps) => {

    const [singleEvent, setSingleEvent] = useState<Event>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        apiService(`/api/events/${id}`)
            .then(singleEvent => setSingleEvent(singleEvent[0]))
    }, [id])


    return (
        <>

            <section className="row p-3 justify-content-center mt-4">
                <section className="col-md-6">
                    <section className="card rounded border border-info bg-white mx-2 shadow d-flex justify-content-center">
                        <h4 className="col-12 text-center my-4 d-flex justify-content-around">{singleEvent?.title}</h4>

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
                                    <th className="border bg-dark text-light text-center">Edit Event</th>
                                </tr>

                                <tr key={singleEvent?.id}>
                                    <td className='p-2 text-center'>{singleEvent?.pet_name}</td>
                                    <td className='p-2 text-center'>{singleEvent?.title}</td>
                                    <td className='p-2 text-center'>{singleEvent?.description}</td>
                                    <td className='p-2 text-center'>{singleEvent?.name}</td>
                                    <td className='p-2 text-center'>{moment(singleEvent?.start_date).format('MMMM Do YYYY')}</td>
                                    <td className='p-2 text-center'> {singleEvent?.end_date === null ? '---' : moment(singleEvent?.end_date).format('MMMM Do YYYY')}</td>
                                    <td className='p-2 text-center'>{singleEvent?.time}</td>
                                    <td className='p-2 text-center'><Link to={`/event/${singleEvent?.id}/edit`}>Edit Event</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </section>
                </section>

            </section>
    
        </>
    );
}

interface SingleEventProps { }

export default SingleEvent;