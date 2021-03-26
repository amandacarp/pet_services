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


    return (<>
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Add Event</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Service</label>
                        <div>



                            <Select options={services?.map((service: { id: number; name: string; }) => {
                                return { value: service.id, label: service.name }
                            })} onChange={selectedService => setSelectedService(selectedService.value)}></Select>

                        </div>
                    </section>
                    <section className="form-group">
                        <label>Pet</label>
                        <div>

                            <Select options={pets?.map((pet: { id: number; pet_name: string; }) => {
                                return { value: pet.id, label: pet.pet_name }
                            })} onChange={selectedPet => setSelectedPets(selectedPet.value)}></Select>

                        </div>
                    </section>
                    <section className="form-group">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            onChange={e => setDescription(e.target.value)}
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
                                        // onClickDay={(value) => console.log(value)}
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
                        <label>Time</label>
                        <input
                            className="form-control"
                            onChange={e => setTime(e.target.value)}

                        />
                    </section>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={postEvent}>Add Event</button>
                    </div>
                </form>
            </section>
        </section>
    </>);
}

interface AddEventProps { }


export default AddEvent;