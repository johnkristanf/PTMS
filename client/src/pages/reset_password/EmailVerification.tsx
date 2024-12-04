import { FormEvent, useState } from 'react';
import axios from 'axios';
import { DOMAIN_NAME } from '../../envPaths';
import Swal from 'sweetalert2';

function EmailVerification() {
    const [email, setEmail] = useState(''); 

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        Swal.fire({
            title: 'Please wait...',
            text: 'Your request is being processed',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await axios.post(`${DOMAIN_NAME}/auth/verify-email/reset`, {
                email: email
            });

            const statusOK = response.status === 200;
            if(statusOK){

                Swal.close();

                Swal.fire({
                    icon: "success",
                    title: "Password Reset Link Sent Successfully!",
                    text: "Please check your email for the given link",
                });
                

                setEmail('');
            }

            console.log('Email sent successfully:', response.data);

            
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center font-semibold">
            <form className="bg-white w-1/2 rounded-md p-8" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl">Email Verification</h1>

                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input 
                        type="email" 
                        id="input-group-1" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        value={email} // Step 3: Bind the input value to the state
                        onChange={(e) => setEmail(e.target.value)} // Step 4: Update the state on input change
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-orange-600 text-white p-2 rounded-md hover:opacity-75">
                    Send Verification Email
                </button>
            </form>
        </div>
    );
}

export default EmailVerification;
