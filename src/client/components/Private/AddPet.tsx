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
        if (!pet_age || !pet_breed || !pet_name) {
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
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Add Event</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Pet Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setPetName(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Pet Age (in years)</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setPetAge(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Pet Breed</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setPetBreed(e.target.value)}
                        />
                    </section>
                    <div>
                    <label>Pet Photo</label>
                    </div>
                    <section className="custom-file mt-2">
                        <label htmlFor="formFile" className="custom-file-label">Upload Photo</label>
                        <input type="file" className="custom-file-input" onChange={handleFileChange}/>
                        
                      
                    </section>
                    <div>
                            {uploadFile && <img src={`${URL.createObjectURL(uploadFile)}`} alt="upload preview" className="image-preview"></img>}
                        </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" onClick={addPet}>Add Pet</button>
                    </div>
                </form>
            </section>
        </section>
    </>);
}

interface AddPetProps { }


export default AddPet;