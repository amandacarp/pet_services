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
        if (!values.email || !values.password) {
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
            <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Login</h1>
            <div className="flex flex-wrap justify-center mt-10 overflow-hidden">
                <form className="w-11/12 px-5 py-5 mx-5 my-5 overflow-hidden bg-gray-300 border rounded shadow lg:w-1/4">

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={values.email}
                            className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={values.password}
                            className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>


                    <div className="mt-5 text-center md:px-2 md:py-2">
                        <button onClick={handleLogin} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Login</button>
                    </div>

                </form>
            </div>
        </>
    )

}


interface LoginProps { }

export default Login;