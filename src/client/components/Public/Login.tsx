import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiService, { setStorage } from '../../utils/api-service';
import { IFormState } from './Register';

const Login = (props: LoginProps) => {
    const history = useHistory<{ history: string }>()
    const [values, setValues] = useState<IFormState>({});

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState: any) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values.email ||  !values.password) {
            Swal.fire({
                title: `Error`,
                icon: 'error',
                text: 'Please fill out all the required fields',
            })
        } else {
        const token = await apiService('/auth/login', 'POST', values)
        if (token) {
            setStorage(token)
            history.push('/profile')
        } else {
            Swal.fire({
                title: 'Invalid!',
                text: `Incorrect Email or Password. Please try again!`,
                icon: 'error',
            })
        } 
       
    }
    };

    return (
        <>

            <section className="row mb-4">
                <h1 className='ml-5 mt-5 text-muted'>Login</h1>
            </section>
        
        <div className="container">
                <div className="row justify-content-center m-4">
                    <div className="col-md-4">
                        <div className="form-group mt-2">
                            <label id="label">Email Address</label>
                            <input type="text" className="form-control" name="email" value={values.email || ''} onChange={handleChanges} required/>
                        

                       
                            <label id="label">Password</label>
                            <input type="password" className="form-control" name="password" value={values.password || ''} onChange={handleChanges} required/>
                       
                        <div className="d-flex justify-content-end">
                            <button id="button" type="button" className="btn shadow mt-2 mx-4" onClick={handleLogin}> Login</button>
                        </div>
                    </div>
                </div>
                </div>
            
                </div>
        </>
    )

}


interface LoginProps { }

export default Login;