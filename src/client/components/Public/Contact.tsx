import * as React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import apiService from '../../utils/api-service';

const Contact = (props: RegisterProps) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!email ||  !subject || !body) {
            Swal.fire({
                title: `Error`,
                icon: 'error',
                text: 'Please fill out all the required fields',
            })
        } else {
        await apiService('/api/contact', "POST", ({ email, subject, content: body }));
        setEmail('');
        setSubject('');
        setBody('');
        Swal.fire({
            title: 'Sent!',
            text: `Your Email has been sent!`,
            icon: 'success',
        })
    }
}



    return (
        <>


            <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Contact Me</h1>
            <div className="flex flex-wrap justify-center mt-10 overflow-hidden">
                <form className="w-11/12 px-5 py-5 mx-5 my-5 overflow-hidden bg-gray-300 border rounded shadow lg:w-1/4">
                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Your Email Address</label>
                        <input
                            name="email"
                            value={email}
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Subject</label>
                        <input
                            name="subject"
                            value={subject}
                            className="flex flex-col w-full text-indigo-500 rounded shadow"
                            onChange={e => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label className="text-lg text-indigo-400">Body</label>
                        <textarea
                            value={body}
                            rows={3}
                            className="flex flex-col w-full text-indigo-500 border-none rounded shadow"
                            onChange={e => setBody(e.target.value)}
                        />
                    </div>

                    


                    <div className="mt-5 text-center md:px-2 md:py-2">
                        <button onClick={handleSubmit} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-gray-200 bg-indigo-500 rounded hover:border-transparent hover:text-indigo-500 hover:bg-white md:mt-0">Send Email</button>
                        </div>

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

export default Contact;