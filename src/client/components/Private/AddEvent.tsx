import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiService from '../../utils/api-service';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Swal from 'sweetalert2';


const AddEvent = (props: AddEventProps) => {

    const [title, setTitle] = useState(null);
    const [pets, setPets] = useState(null)
    const [description, setDescription] = useState(null);
    const [start_date, setStartDate] = useState(null);
    const [end_date, setEndDate] = useState(null);
    const [time, setTime] = useState(null);
    const [services, setService] = useState(null);
    const [serviceid, setSelectedService] = useState(null);
    const [petid, setSelectedPets] = useState(null);
    const [isRange, setIsRange] = useState(false);
    const [singleEvent, setSingleEvent] = useState(false);
    const history = useHistory();


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


    const postEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!title || !description || !start_date || !time || !serviceid || !petid) {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Please fill out all the required fields'
            })
        } else {
        await apiService(`/api/events`, 'POST', { title, description, start_date, end_date, time, serviceid, petid, })
        history.push(`/profile`)
        }
        
    }

    const startChange = (start_date: Date) => {
        setStartDate(start_date)
    }

    const endChange = (end_date: Date) => {
        setEndDate(end_date)
    }

    const handleRange = () => {
        setIsRange(!isRange)
        setSingleEvent(singleEvent)
    }


    return (
    
        <>
        
            <h1 className="flex justify-center mt-5 text-2xl font-bold text-indigo-300 wrap">Add Appointment</h1>
                <div className="md:flex md:flex-wrap md:justify-center">
                <form className="mx-5 my-5">
                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Title</label>
                        <input
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={e => setTitle(e.target.value)}
                        />
                        </div>

                        <div className="mt-5">
                        <label className="text-lg text-indigo-400">Service</label>
                        <div className="w-full">
                            <Select className="text-indigo-500" options={services?.map((service: { id: number; name: string; }) => {
                                return { value: service.id, label: service.name }
                            })} onChange={selectedService => setSelectedService(selectedService.value)}></Select>

                        </div>
                        </div>
                        
                        <div className="mt-5">
                        <label className="text-lg text-indigo-400">Pet</label>
                        <div className="w-full">

                            <Select className="text-indigo-500" options={pets?.map((pet: { id: number; pet_name: string; }) => {
                                return { value: pet.id, label: pet.pet_name }
                            })} onChange={selectedPet => setSelectedPets(selectedPet.value)}></Select>

                        </div>
                        </div>

                        <div className="mt-5">
                        <label className="text-lg text-indigo-400">Description</label>
                        <textarea
                            className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                            rows={3}
                            onChange={e => setDescription(e.target.value)}
                        />
                        </div>
            
                    <div className="mt-5">
                    <label className="text-lg text-indigo-400">Date</label>
                        
                       <div className="mt-3">
                            <input type="checkbox" value="option1" className="text-indigo-500 rounded" name="inlineCheckOptions" onClick={handleRange}/>
                            <label className="text-sm text-indigo-600" htmlFor="inlineCheck1"> Date Range</label>
                        </div>
                    {isRange && (
                        <div className="flex flex-wrap mt-3 overflow-hidden lg:-mx-3">
                            <div className="w-full overflow-hidden lg:my-3 lg:px-3 lg:w-1/2">
                                    <label className="text-lg text-indigo-400">Start Date</label>
                                    {start_date === null ? <Calendar
                                        //@ts-ignore
                                        onChange={startChange}
                                        value={start_date}
                                        // onClickDay={(value) => console.log(value)}
                                        calendarType={"US"}
                                        // tileDisabled= {}
                                        className="border rounded shadow border-dark"
                                    /> : <Calendar className="blur"/>}
                                 </div>
                                 <div className="w-full mt-3 overflow-hidden lg:my-3 lg:px-3 lg:w-1/2">
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
                        <label className="text-lg text-indigo-400">Time</label>
                        <input
                            type="time"
                            onChange={e => setTime(e.target.value)}
                            className="w-full text-indigo-500 border-none rounded shadow"
                        />
                        </div>
                        <div className="mt-5 text-center md:px-2 md:py-2"><button onClick={postEvent} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-indigo-400 border border-indigo-400 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Schedule</button></div>

                </form>
                </div>

    </>
    );
}

interface AddEventProps { }


export default AddEvent;