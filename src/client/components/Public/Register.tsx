import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiService, { setStorage } from '../../utils/api-service';

const Register = (props: RegisterProps) => {
    const history = useHistory<{ history: string }>()
    const [values, setValues] = useState<IFormState>({});

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };


    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values.email || !values.owner_name || !values.password || !values.address) {
            Swal.fire({
                title: `Error`,
                icon: 'error',
                text: 'Please fill out all the required fields',
            })
        } else {
        const token = await apiService('/auth/register', 'POST', values)
        setStorage(token)
        history.push('/profile')
    }
    };


    return (
        <>

            <section className="row mb-4">
                <h1 className='ml-5 mt-5 text-muted'>Register</h1>
            </section>

            <div className="container">
                <div className="row justify-content-center m-4">
                    <div className="col-md-4">

                        <div className="form-group mt-2">
                            <label id="label">Name</label>
                            <input type="text" className="form-control" name="owner_name" value={values.owner_name || ''} onChange={handleChanges} required/>

                            <label id="label">Email Address</label>
                            <input type="text" className="form-control" name="email" value={values.email || ''} onChange={handleChanges} required/>

                            <label id="label">Home Address</label>
                            <input type="text" className="form-control" name="address" value={values.address || ''} onChange={handleChanges} required/>

                            <label id="label">Password</label>
                            <input type="password" className="form-control" name="password" value={values.password || ''} onChange={handleChanges} required/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn shadow mt-2 mx-4" onClick={handleRegister} >
                            Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export interface IFormState {
    email?: string;
    password?: string;
    owner_name?: string;
    address?: string;
}

interface RegisterProps { }

export default Register;