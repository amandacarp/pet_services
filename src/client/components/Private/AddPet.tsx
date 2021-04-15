import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TOKEN_KEY } from '../../utils/api-service';

const AddPet = (props: AddPetProps) => {

    const [pet_name, setPetName] = useState(null);
    const [pet_age, setPetAge] = useState(null);
    const [pet_breed, setPetBreed] = useState(null);
    const history = useHistory();

    const [uploadFile, setUploadFile] = useState<File>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUploadFile(e.target.files[0])
    }


    const addPet = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!pet_age || !pet_breed || !pet_name || !uploadFile) {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Please fill out all the required fields'
            })
        } else {
            try {
                const newImage = new FormData();
                newImage.append('pet_photo', uploadFile);
                newImage.append('pet_name', pet_name);
                newImage.append('pet_age', pet_age);
                newImage.append('pet_breed', pet_breed);
                const TOKEN = localStorage.getItem(TOKEN_KEY);
                const res = await fetch('/api/pets', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${TOKEN}`
                    },
                    body: newImage
                });
                const result = await res.json();
                history.push(`/profile`)
            } catch (error) {
                console.log(error)
            }
        }

    }


    return (<>





        <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Add a New Pet</h1>
        <div className="flex flex-wrap justify-center mt-8 overflow-hidden">
            <form className="w-11/12 px-5 py-5 mx-5 my-5 overflow-hidden bg-gray-300 border rounded shadow lg:w-1/4">
                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Pet Name</label>
                    <input
                        className="flex flex-col w-full text-indigo-500 rounded shadow"
                        onChange={e => setPetName(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Pet Breed</label>
                    <input
                        className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                        onChange={e => setPetBreed(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Pet Age</label>
                    <input
                        className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                        onChange={e => setPetAge(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label className="text-lg text-indigo-400">Pet Photo</label>
                    

                    <div className="w-full bg-grey-lighter">
                        <label className="flex flex-col items-center px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-blue hover:bg-blue hover:text-indigo-400">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select a file</span>
                            <input type='file' className="hidden" onChange={handleFileChange}/>
                        </label>
                    </div>

                    <div className="flex justify-center">
                        {uploadFile && <img src={`${URL.createObjectURL(uploadFile)}`} alt="upload preview" className="image-preview"></img>}
                    </div>


                    <div className="mt-5 text-center md:px-2 md:py-2">
                        <button onClick={addPet} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Add Pet</button> 
                        </div>
                </div>
            </form>
        </div>
        
    </>);
}

interface AddPetProps { }


export default AddPet;