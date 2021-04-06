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

            <div className="flex flex-wrap justify-center px-2 mx-auto mt-5 overflow-hidden">
                <div className="px-5 py-5 m-2 text-center text-gray-800 bg-gray-300 rounded">
                    <table className="w-1/2 text-xs table-auto md:text-lg lg:w-full">
                        <thead>
                            <tr>
                                <th className="text-center md:text-xl">Pet</th>
                                <th className="text-center md:text-xl">Breed</th>
                                <th className="text-center md:text-xl">Age</th>
                                <th className="text-center md:text-xl">Photo</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr key={pet?.id}>
                                <td className="text-center border border-indigo-600 md:px-2 md:py-2">{pet?.pet_name}</td>
                                <td className="text-center border border-indigo-600 md:px-2 md:py-2">{pet?.pet_breed}</td>
                                <td className="text-center border border-indigo-600 md:px-2 md:py-2">{pet?.pet_age}</td>
                                <td className="text-center border border-indigo-600 md:px-2 md:py-2"><img src={pet?.pet_photo} style={{ maxHeight: '70px', maxWidth: '70px' }} /></td>
                                <td className="text-center md:px-2 md:py-2"><button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-indigo-400 border border-indigo-400 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0"><Link to={`/pet/${pet?.id}/edit`}>Edit</Link></button></td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

interface SinglePetProps { }

export default SinglePet;