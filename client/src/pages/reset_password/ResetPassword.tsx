import { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { DOMAIN_NAME } from '../../envPaths';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null); // Error state for validation message

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromQuery = queryParams.get('email');
        
        if (emailFromQuery) {
            const decodedEmail = decodeURIComponent(emailFromQuery);
            setEmail(decodedEmail);
        }

    }, [location]);

    const passwordValidationPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    const validatePassword = (password: string) => {
        if (!passwordValidationPattern.test(password)) {
            setError('Password must contain at least one lowercase letter, one uppercase letter, and one digit.');
            return false;
        }
        setError(null); 
        return true;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validatePassword(newPassword)) {
            return; 
        }

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
            const response = await axios.put(`${DOMAIN_NAME}/auth/change/password`, 
                { 
                    newPassword, 
                    email 
                });

            const statusOK = response.status === 200;
            if (statusOK) {
                Swal.close();

                Swal.fire({
                    icon: 'success',
                    title: 'Password Changed Successfully!',
                    text: 'Your password has been updated.',
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        window.location.href = '/login';
                    }
                });
            }

            console.log('Password changed successfully:', response.data);

        } catch (error) {
            console.error('Error changing password:', error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'There was an error while changing your password.',
            });
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center font-semibold">
            <form className="bg-white w-1/2 rounded-md p-8" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl">Reset Password</h1>

                <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <div className="relative mb-6">
                    <input
                        type="password"
                        id="newPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                {error && (
                    <div className="text-red-500 text-sm mb-6">
                        {error}
                    </div>
                )}

                <button type="submit" className="w-full bg-orange-600 text-white p-2 rounded-md hover:opacity-75">
                    Change Password
                </button>
            </form>
        </div>
    );
}

export default ResetPassword;
