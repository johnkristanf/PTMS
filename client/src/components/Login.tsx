import { useForm, SubmitHandler } from "react-hook-form"
import { LoginCredentials } from "../types/auth"
import { Login } from "../http/post/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Swal from "sweetalert2"


export function LoginForm({ setRole }: {
    setRole: React.Dispatch<React.SetStateAction<string>>
}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginCredentials>()

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [invalidCredentials, setInvalidCredentials] = useState<boolean>();
    const [timeLoginTimeout, setTimeLoginTimeout] = useState<boolean>();
    
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
        Swal.fire({
            title: 'Logging In...',
            text: 'Your request is being processed',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        const loginResult = await Login(data)
        console.log("loginResult: ", loginResult);
        
        if(loginResult === "unauthorized"){
            setInvalidCredentials(true)
            Swal.close();
        } else if(loginResult === "timeout"){
            setTimeLoginTimeout(true);
            Swal.close();

        }

        reset();

    }

    return (
        <>

            <FontAwesomeIcon
                onClick={() => setRole("")}
                icon={faArrowLeft}
                className="absolute top-3 left-3 text-3xl hover:opacity-75 hover:cursor-pointer"
            />

            <h1 className="font-bold text-3xl">Login to PTMS</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-2 w-full">

                <div className="flex gap-1">
                    {errors.email && <span className="text-red-800 font-bold">Email is required.</span>}
                    {errors.password && <span className="text-red-800 font-bold">Password is required.</span>}

                    {invalidCredentials && <span className="text-red-800 font-bold">Invalid Login Credentials</span>}
                    {timeLoginTimeout && <span className="text-red-800 font-bold">Request took too long to respond due to slow internet</span>}

                </div>

                <label className="font-semibold">Email</label>
                <input
                    type="email"
                    className="bg-gray-300 rounded-md p-2 focus:outline-orange-500"
                    {...register("email", { required: true })}
                />


                <label className="font-semibold">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="bg-gray-300 rounded-md p-2 focus:outline-orange-500 pr-10 w-full"
                        {...register("password", { required: true })}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        onClick={togglePasswordVisibility}
                    />
                </div>

                <div className="flex justify-between items-center mt-5">
                    <a 
                        className="font-semibold hover:opacity-75 hover:cursor-pointer"
                        href="/email/verify"
                    >
                            Forgot your password?
                    </a>

                    <button
                        type="submit"
                        className="bg-orange-500 rounded-md p-2 text-white w-[30%] font-semibold hover:opacity-75"
                    >
                        LOGIN
                    </button>
                </div>

            </form>

        </>
    )
}

export function ApplicantLogin({setRole}: {
    setRole: React.Dispatch<React.SetStateAction<string>>
}){
    return(

        <>
            <FontAwesomeIcon 
                onClick={() => setRole("")}
                icon={faArrowLeft} 
                className="absolute top-3 left-3 text-3xl hover:opacity-75 hover:cursor-pointer"
            />

            <h1 className="text-black font-bold text-justify">Please log in with your Google account for application updates.</h1>    


            {/* FOR DEVELOPMENT: http://localhost:8080/auth/google/login */}
            {/* FOR PRODUCTION:  https://web-ptms.com/auth/google/login */}

            <button 
                onClick={() => window.location.href = "https://web-ptms.com/auth/google/login" } 
                className="p-3 flex items-center gap-2 bg-orange-400 rounded-md text-white font-bold hover:opacity-75"
                >

                <img src="/img/google.png" width={20}/> Login With Google
            </button>
        </>
       
    )
}