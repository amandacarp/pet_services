import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import apiService from '../../utils/api-service';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Swal from 'sweetalert2';



const EditEvent = (props: EditEventProps) => {

    const [title, setTitle] = useState(null);
    const [events, setEvents] = useState(null);
    const [pets, setPets] = useState(null);
    const [description, setDescription] = useState(null);
    const [start_date, setStartDate] = useState(null);
    const [end_date, setEndDate] = useState(null);
    const [time, setTime] = useState(null);
    const [services, setService] = useState(null);
    const [serviceid, setSelectedService] = useState(null);
    const [petid, setSelectedPets] = useState(null);
    const history = useHistory();
    const [isRange, setIsRange] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const { id } = useParams<{ id: string }>();

  
    useEffect(() => {
        apiService('/api/users/profile')
            .then(result => {
                setPets(result.pets);
            })
    }, [])

    useEffect(() => {
        apiService('/api/services')
        .then(services => setService(services))
    }, [])

    useEffect(() => {
        apiService(`/api/events/${id}`)
            .then(events => setEvents(events[0]))
    }, [id])


    const editEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!title || !description || !start_date || !time || !serviceid || !petid) {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Please fill out all the required fields'
            })
        } else {
            Swal.fire({
                title: `Save your edit?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, save it!'
            }).then(async (result) => {
                if (result.isConfirmed){
                    return await apiService(`/api/events/${id}`, 'PUT', {title, serviceid, petid, description, start_date, end_date, time})
                    .then(() => {
                        Swal.fire({
                            title: 'Edit Saved!',
                            text: `Your event has been edited.`,
                            icon: 'success',
                        })
                    })
                } else if(result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Edit not saved',
                        'error'
                    )
                }
            }).then(() => {history.push('/profile')})
            .catch(err => {
                Swal.fire({
                    title: `Error: Event not edited`,
                    icon: 'error',
                    text: err,
                    timer: 1500
                })
                console.log(err)
            })
        }
    }


    const deleteEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
            Swal.fire({
                title: `Delete this event?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed){
                    return await apiService(`/api/events/${id}`, 'DELETE')
                    .then(() => {
                        Swal.fire({
                            title: 'Event Deleted!',
                            text: `Your event has been deleted.`,
                            icon: 'success',
                        })
                    })
                } else if(result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Event not Deleted',
                        'error'
                    )
                }
            }).then(() => {history.push('/profile')})
            .catch(err => {
                Swal.fire({
                    title: `Error: Event not deleted`,
                    icon: 'error',
                    text: err,
                    timer: 1500
                })
                console.log(err)
            })
        
    }


    const startChange = (start_date: Date) => {
        setStartDate(start_date)
    }

    const endChange = (end_date: Date) => {
        setEndDate(end_date)
    }


    const handleRange = () => {
        setIsRange(!isRange)
    }


    return (<>
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Edit Event</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Edit Title</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setTitle(e.target.value)}
                            defaultValue={events?.title}
                        />
                    </section>
                    <section className="form-group">
                        <label>Edit Service</label>
                        <div>
                        <Select options={services?.map((service: { id: number; name: string; }) => {
                                return { value: service.id, label: service.name }
                            })} onChange={selectedService => setSelectedService(selectedService.value)}></Select>
                        </div>
                    </section>
                    <section className="form-group">
                        <label>Edit Pet</label>
                        <div>
                        <Select options={pets?.map((pet: { id: number; pet_name: string; }) => {
                                return { value: pet.id, label: pet.pet_name }
                            })} onChange={selectedPet => setSelectedPets(selectedPet.value)}></Select>
                        </div>
                    </section>
                    <section className="form-group">
                        <label>Edit Description</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            onChange={e => setDescription(e.target.value)}
                            defaultValue={events?.description}
                        />
                    </section>
                    <label>Date</label>
                    <div className="row d-flex justify-content-center mb-2">
            
                        <div className="form-check form-check-inline" >
                            <input type="checkbox" value="option1" name="inlineCheckOptions" className="form-check-input" onClick={handleRange}/>
                            <label htmlFor="inlineCheck1" className="form-check-label">Date Range</label>
                        </div>
                    </div>
                    {isRange && (
                        <div className="row">
                            <div className="col-md-6">
                                <section className="form-group mx-2">
                                    <label>Start Date</label>
                                    {start_date === null ? <Calendar
                                        //@ts-ignore
                                        onChange={startChange}
                                        value={start_date}
                                        // onClickDay={(value) => console.log(value)}
                                        calendarType={"US"}
                                        // tileDisabled= {}
                                        className="shadow border border-dark rounded"
                                    /> : <Calendar className="blur"/>}
                                    

                                </section>
                            </div>
                            <div className="col-md-6">
                                <section className="form-group">
                                    <label>End Date</label>
                                    <Calendar
                                        //@ts-ignore
                                        onChange={endChange}
                                        value={end_date}
                                        calendarType={"US"}
                                        // tileDisabled= {({date, view }) => (view === 'month') && date.getDay() === 0}
                                        className="shadow border border-dark rounded"
                                    />

                                </section>
                            </div>
                        </div>
                    )}

                    {!isRange && (
                        <div className="row d-flex justify-content-center">
                        <section className="form-group mx-2">
                        <Calendar
                            //@ts-ignore
                            onChange={startChange}
                            value={start_date}
                            // onClickDay={(value) => console.log(value)}
                            calendarType={"US"}
                            // tileDisabled= {({date, view }) => (view === 'month') && date.getDay() === 0}
                            className="shadow border border-dark rounded"
                        />
                    </section>
                    </div>
                    )}
                    <section className="form-group">
                        <label>Edit Time</label>
                        <input
                            className="form-control"
                            onChange={e => setTime(e.target.value)}
                            defaultValue={events?.time}

                        />
                    </section>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary mr-2" onClick={editEvent}>Save Event</button>
                        <button className="btn btn-primary" onClick={deleteEvent}>Delete Event</button>
                    </div>
                </form>
            </section>
        </section>
    </>);
}

interface EditEventProps { }


export default EditEvent;