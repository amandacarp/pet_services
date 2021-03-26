import * as React from 'react';
import { Link } from 'react-router-dom';
import Events from './Events';

const EventDash = (props: EventDashProps) => {
    return (
        <>
            <section className="row mb-4">
                <h1 className='ml-5 mt-5 text-muted'>Dashboard</h1>
            </section>
            <section className="row p-3 justify-content-center">
                <section className="col-md-6">
                    <section className="card rounded border border-info bg-white mx-2 shadow d-flex justify-content-center">
                        <h4 className="col-12 text-center my-4 d-flex justify-content-around">Upcoming Events<Link to="/add/event" className="btn btn-primary">Add Event</Link></h4>
                        <Events />
                    </section>
                </section>
                
            </section>


        </>
    );
}

interface EventDashProps { }

export default EventDash;






