import e from 'express';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiService, {TOKEN_KEY} from '../../utils/api-service';



const EditPet = (props: EditPetProps) => {

    const [pet, setPet] = useState(null)
    const [pet_name, setPetName] = useState(null);
    const [pet_age, setPetAge] = useState(null);
    const [pet_breed, setPetBreed] = useState(null);
    const [pet_photo, setPetPhoto] = useState(null);
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [uploadFile, setUploadFile] = useState<File>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUploadFile(e.target.files[0])
    }


    useEffect(() => {
        apiService(`/api/pets/${id}`)
            .then(pet => setPet(pet[0]))
    }, [id])


    const editPet = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!pet_age || !pet_breed || !pet_name) {
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
                    const newImage = new FormData();
                    newImage.append('pet_photo', uploadFile);
                    newImage.append('pet_name', pet_name);
                    newImage.append('pet_age', pet_age);
                    newImage.append('pet_breed', pet_breed);
                    const TOKEN = localStorage.getItem(TOKEN_KEY);
                    const res = await fetch(`/api/pets/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${TOKEN}`
                        },
                        body: newImage
                    });
                    const result = await res.json();
                    Swal.fire({
                        title: 'Edit Saved!',
                        text: 'Your Pet has been edited',
                        icon: 'success'
                    })
                    history.push(`/profile`)
                } else if(result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Edit not saved',
                        'error'
                    )
                }
            }) 
            .catch(err => {
                Swal.fire({
                    title: `Error: Pet not edited`,
                    icon: 'error',
                    text: err,
                })
                console.log(err)
            })
        }
    }

    const deletePet = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
            Swal.fire({
                title: `Delete this pet?`,
                icon: 'warning',
                text: 'Warning! Any events scheduled for this pet must be deleted first!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed){
                    return await apiService(`/api/pets/${id}`, 'DELETE')
                    .then(() => {
                        Swal.fire({
                            title: 'Pet Deleted!',
                            text: `Your pet has been deleted.`,
                            icon: 'success',
                        })
                    })
                } else if(result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Pet not Deleted',
                        'error'
                    )
                }
            }).then(() => {history.push('/profile')})
            .catch(err => {
                Swal.fire({
                    title: `Error: Pet not deleted`,
                    icon: 'error',
                    text: err,
                    timer: 1500
                })
                console.log(err)
            })
        
    }

    return (<>
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Edit Pet</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Pet Name</label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={pet?.pet_name}
                            onChange={e => setPetName(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Pet Age</label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={pet?.pet_age}
                            onChange={e => setPetAge(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Pet Breed</label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={pet?.pet_breed}
                            onChange={e => setPetBreed(e.target.value)}
                        />
                    </section>
                    <div>
                    <label>Pet Photo</label>
                    </div>
                    <div>
                    <img style={{maxHeight: '100px', maxWidth: '100px'}} src={pet?.pet_photo}/>

                    </div>
                    <section className="custom-file mt-2">
                        <label htmlFor="formFile" className="custom-file-label">Upload Photo</label>
                        <input type="file" className="custom-file-input" onChange={handleFileChange}/>
                        
                      
                    </section>
                    <div>
                            {uploadFile && <img src={`${URL.createObjectURL(uploadFile)}`} alt="upload preview" className="image-preview"></img>}
                        </div>
          
                   
                    
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary mr-2" onClick={editPet}>Save Edit</button>
                        <button className="btn btn-primary mr-2" onClick={deletePet}>Delete Pet</button>
                    </div>
                </form>
            </section>
        </section>
    </>);
}

interface EditPetProps { }


export default EditPet;