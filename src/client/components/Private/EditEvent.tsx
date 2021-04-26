import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import apiService from '../../utils/api-service';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Swal from 'sweetalert2';



const EditEvent = (props: EditEventProps) => {

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
    const { id } = useParams<{ id: string }>();    
    const [dogs, setDogs] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(dogs => setDogs(dogs))
            .catch(e => console.log(e));
    }, [])


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
        if (!description || !start_date || !time || !serviceid || !petid) {
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
                confirmButtonColor: '#362f78',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, save it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    return await apiService(`/api/events/${id}`, 'PUT', { serviceid, petid, description, start_date, end_date, time })
                        .then(() => {
                            Swal.fire({
                                title: 'Edit Saved!',
                                text: `Your event has been edited.`,
                                imageUrl: `${dogs.message}`,
                                icon: 'success',
                            })
                        })
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Edit not saved',
                        'error'
                    )
                }
            }).then(() => { history.push('/profile') })
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
            confirmButtonColor: '#362f78',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                return await apiService(`/api/events/${id}`, 'DELETE')
                    .then(() => {
                        Swal.fire({
                            title: 'Event Deleted!',
                            text: `Your event has been deleted.`,
                            imageUrl: `${dogs.message}`,
                            icon: 'success',
                        })
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Event not Deleted',
                    'error'
                )
            }
        }).then(() => { history.push('/profile') })
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



        <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Edit Appointment</h1>
        <div className="flex flex-wrap justify-center mt-8 overflow-hidden">
            <form className="w-11/12 px-5 py-5 mx-5 my-5 overflow-hidden bg-gray-300 border rounded shadow lg:w-1/4">


                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Edit Service</label>
                    <div className="w-full">
                        <Select className="text-indigo-500" options={services?.map((service: { id: number; name: string; }) => {
                            return { value: service.id, label: service.name }
                        })} onChange={selectedService => setSelectedService(selectedService.value)}></Select>

                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Edit Pet</label>
                    <div className="w-full">

                        <Select className="text-indigo-500" options={pets?.map((pet: { id: number; pet_name: string; }) => {
                            return { value: pet.id, label: pet.pet_name }
                        })} onChange={selectedPet => setSelectedPets(selectedPet.value)}></Select>

                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Edit Description</label>
                    <textarea
                        className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                        rows={3}
                        onChange={e => setDescription(e.target.value)}
                        defaultValue={events?.description}
                    />
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Edit Date</label>

                    <div className="mt-3">
                        <input type="checkbox" value="option1" className="text-indigo-500 rounded" name="inlineCheckOptions" onClick={handleRange} />
                        <label className="text-sm text-indigo-600" htmlFor="inlineCheck1"> Date Range</label>
                    </div>
                    {isRange && (
                        <div className="flex flex-wrap mt-3 overflow-hidden lg:-mx-3">
                            <div className="w-full overflow-hidden lg:my-3 lg:px-3">
                                <label className="text-lg text-indigo-400">Start Date</label>
                                {start_date === null ? <Calendar
                                    //@ts-ignore
                                    onChange={startChange}
                                    value={start_date}
                                    // onClickDay={(value) => console.log(value)}
                                    calendarType={"US"}
                                    // tileDisabled= {}
                                    className="border rounded shadow border-dark"
                                /> : <Calendar className="blur" />}
                            </div>
                            <div className="w-full mt-3 overflow-hidden lg:my-3 lg:px-3">
                                <label className="text-lg text-indigo-400">End Date</label>
                                <Calendar
                                    //@ts-ignore
                                    onChange={endChange}
                                    value={end_date}
                                    // onClickDay={(value) => console.log(value)}
                                    calendarType={"US"}
                                    // tileDisabled= {({date, view }) => (view === 'month') && date.getDay() === 0}
                                    className="border rounded shadow border-dark"
                                />
                            </div>
                        </div>
                    )}

                    {!isRange && (
                        <div className="mt-3">
                            <Calendar
                                //@ts-ignore
                                onChange={startChange}
                                value={start_date}
                                // onClickDay={(value) => console.log(value)}
                                calendarType={"US"}
                                // tileDisabled= {({date, view }) => (view === 'month') && date.getDay() === 0}
                                className="border rounded shadow border-dark"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Edit Time</label>
                    <input
                        type="time"
                        onChange={e => setTime(e.target.value)}
                        className="w-full text-indigo-500 border-none rounded shadow"
                        defaultValue={events?.time}

                    />
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="mt-5 md:px-2 md:py-2"><button onClick={editEvent} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Save</button></div>
                    <div className="mt-5 md:px-2 md:py-2"><button onClick={deleteEvent} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Delete</button></div>
                </div>
            </form>
        </div>




    </>);
}

interface EditEventProps { }


export default EditEvent;