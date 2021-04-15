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
        <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Your Pet</h1>

            <div className="flex flex-wrap justify-center px-2 mx-auto mt-5 overflow-hidden">
                <div className="px-5 py-5 m-2 text-center text-gray-800 bg-gray-300 rounded">

                    <table className="w-1/2 mt-3 text-xs table-auto md:text-lg lg:w-full">
                        
                        <tbody>

                            <tr key={pet?.id}>
                                <td className="text-center md:px-2 md:py-2">{pet?.pet_name}</td>
                                <td className="text-center md:px-2 md:py-2">{pet?.pet_breed}</td>
                                <td className="text-center md:px-2 md:py-2">{pet?.pet_age}</td>
                                <td className="text-center md:px-2 md:py-2"><button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0"><Link to={`/pet/${pet?.id}/edit`}>Edit</Link></button></td>

                            </tr>

                        </tbody>

                    </table>
                    <div className="text-center md:px-2 md:py-2"><img src={pet?.pet_photo} style={{ maxHeight: '300px', maxWidth: '300px' }} /></div>

                </div>
            </div>

        </>
    );
}

interface SinglePetProps { }

export default SinglePet;