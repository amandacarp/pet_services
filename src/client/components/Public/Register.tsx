import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiService, { setStorage } from '../../utils/api-service';

const Register = (props: RegisterProps) => {
    const history = useHistory<{ history: string }>()
    const [values, setValues] = useState<IFormState>({});

    const handleChanges = (e: React.ChangeEvent<(HTMLInputElement & HTMLTextAreaElement)>) => {
        e.persist();
        setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };


    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!values.email || !values.owner_name || !values.password || !values.address) {
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


            <h1 className="flex justify-center text-2xl font-bold text-indigo-300 border border-indigo-300 mt-14">Register</h1>
            <div className="flex flex-wrap justify-center mt-10 overflow-hidden">
                <form className="w-11/12 px-5 py-5 mx-5 my-5 overflow-hidden bg-gray-300 border border-indigo-300 rounded shadow lg:w-1/4">
                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Name</label>
                        <input
                            name="owner_name"
                            value={values.owner_name}
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Address</label>
                        <textarea
                            name="address"
                            value={values.address}
                            rows={3}
                            className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Email</label>
                        <input
                            name="email"
                            value={values.email}
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Password</label>
                        <input
                            name="password"
                            value={values.password}
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={handleChanges}
                        />
                    </div>


                    <div className="mt-5 text-center md:px-2 md:py-2"><button onClick={handleRegister} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-indigo-400 border border-indigo-400 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Register</button></div>

                </form>
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