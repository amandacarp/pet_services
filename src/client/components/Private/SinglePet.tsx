import * as React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../../utils/api-service';
import { Pet } from '../../../common/types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const SinglePet = (props: SinglePetProps) => {

    const [pet, setSinglePet] = useState<Pet>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        apiService(`/api/pets/${id}`)
            .then(pet => setSinglePet(pet[0]))
    }, [id])


    return (
        <>

            <section className="row p-3 justify-content-center mt-4">
                <section className="col-md-6">
                    <section className="card rounded border border-info bg-white mx-2 shadow d-flex justify-content-center">
                        <h4 className="col-12 text-center my-4 d-flex justify-content-around">{pet?.pet_name}</h4>

                        <table>
                            <tbody>
                                <tr className="border">
                                    <th className="border bg-dark text-light text-center">Pet Name</th>
                                    <th className="border bg-dark text-light text-center">Pet Age</th>
                                    <th className="border bg-dark text-light text-center">Pet Breed</th>
                                    <th className="border bg-dark text-light text-center">Pet Photo</th>
                                    <th className="border bg-dark text-light text-center">Edit Pet</th>
                                </tr>

                                <tr key={pet?.id}>
                                    <td className='p-2 text-center'>{pet?.pet_name}</td>
                                    <td className='p-2 text-center'>{pet?.pet_age} year(s)</td>
                                    <td className='p-2 text-center'>{pet?.pet_breed}</td>
                                    <td className='p-2 text-center'> 
                                    <img style={{maxHeight: '50px', maxWidth: '50px'}} src={pet?.pet_photo}/>
                                    </td>
                                    <td className='p-2 text-center'><Link to={`/pet/${pet?.id}/edit`}>Edit Pet</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </section>
                </section>

            </section>
    
        </>
    );
}

interface SinglePetProps { }

export default SinglePet;