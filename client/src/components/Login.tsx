import { useForm, SubmitHandler } from "react-hook-form"
import { LoginCredentials, SignupCredentials } from "../types/auth"
import { ApplicantLogin, SendTemporaryPassword, SignupApplicant, StaffAccountLogin } from "../http/post/auth"
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

        const loginResult = await StaffAccountLogin(data)
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
                        className="bg-orange-700 rounded-md p-2 text-white w-[30%] font-semibold hover:opacity-75"
                    >
                        LOGIN
                    </button>
                </div>

            </form>

        </>
    )
}


export function ApplicantAuthentication({ setRole }: {
    setRole: React.Dispatch<React.SetStateAction<string>>
}) {
    
    const [authType, setAuthType] = useState<string>("login");

    return (
        <>

            <FontAwesomeIcon
                onClick={() => setRole("")}
                icon={faArrowLeft}
                className="absolute top-3 left-3 text-3xl hover:opacity-75 hover:cursor-pointer"
            />

            {
                authType === "login" ? (
                    <ApplicantLoginForm setAuthType={setAuthType} />
                ) : authType === "signup" ? (
                    <ApplicantSignupForm setAuthType={setAuthType} />
                ) : authType === "forgot_password" ? (
                    <ApplicantForgotPasswordForm setAuthType={setAuthType} />
                ) : null
            }

            
        </>
    )
}


function ApplicantLoginForm({setAuthType}: {
    setAuthType: React.Dispatch<React.SetStateAction<string>>
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

        const loginResult = await ApplicantLogin(data)
        console.log("loginResult: ", loginResult);

        if(loginResult === "success"){
            window.location.href = "/services/option"
        }else if(loginResult === "unauthorized"){
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
            <h1 className="font-bold text-3xl">Login to PTMS</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full ">

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

                        <div className="flex flex-col">
                            <h1 
                                className="font-semibold "
                            >
                                    Don't have an account? 
                                    <a 
                                        className="ml-1 text-orange-800 hover:opacity-75 hover:cursor-pointer" 
                                        onClick={() => setAuthType("signup")}>
                                        Signup
                                    </a>  
                            </h1>

                            <h1 className="font-semibold mt-3">
                                Forgot Password?{" "}
                                <a
                                    className="ml-1 text-orange-800 hover:opacity-75 hover:cursor-pointer"
                                    onClick={() => setAuthType("forgot_password")}
                                >
                                    Click Here
                                </a>
                            </h1>
                        </div>
                        


                    <button
                        type="submit"
                        className="bg-orange-700 rounded-md p-2 text-white w-[30%] font-semibold hover:opacity-75"
                    >
                        LOGIN
                    </button>
                </div>

            </form>

        </>
    )
}



function ApplicantSignupForm({ setAuthType }: { setAuthType: React.Dispatch<React.SetStateAction<string>> }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SignupCredentials>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit: SubmitHandler<SignupCredentials> = async (data) => {
        Swal.fire({
            title: "Signing Up...",
            text: "Your request is being processed",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        const signupResult = await SignupApplicant(data);
        console.log("signupResult: ", signupResult);

        if (signupResult === "need_verification") {
            Swal.close();
            Swal.fire({
                title: "Account Activation Needed",
                text: "Check your email for the activation link. If you don't see it, please check your spam or junk folder.",
            });
        }

        if (signupResult === "email_already_exists") {
            Swal.close();
            Swal.fire({
                title: "Email already been registered",
                text: "Please register another email",
            });
        }

        reset();
    };

    return (
        <>
            <h1 className="font-bold text-3xl">Signup to PTMS</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-2 w-full">
                {/* Display validation errors */}
                <div className="flex gap-1">
                    {errors.full_name && <span className="text-red-800 font-bold">Full Name is required.</span>}
                    {errors.email && <span className="text-red-800 font-bold">Email is required.</span>}
                </div>

                {/* Full Name Input */}
                <label className="font-semibold">Full Name</label>
                <input
                    type="text"
                    style={{ textTransform: "capitalize" }}
                    className="bg-gray-300 rounded-md p-2 focus:outline-orange-500"
                    placeholder="(Last Name First Name, Middle Initial)"
                    {...register("full_name", { required: true })}
                />

                {/* Email Input */}
                <label className="font-semibold">Email</label>
                <input
                    type="email"
                    className="bg-gray-300 rounded-md p-2 focus:outline-orange-500"
                    {...register("email", { required: true })}
                />

                {/* Password Input with Validation */}
                <label className="font-semibold">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="bg-gray-300 rounded-md p-2 focus:outline-orange-500 pr-10 w-full"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Must include 1 uppercase, 1 lowercase, 1 number, and 1 special character",
                            },
                        })}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        onClick={togglePasswordVisibility}
                    />
                </div>

                {/* Password Validation Messages */}
                {errors.password && <span className="text-red-800 font-bold">{errors.password.message}</span>}

                <div className="flex justify-between items-center">

                        <h1 className="font-semibold">
                            Already have an account?{" "}
                            <a
                                className="ml-1 text-orange-800 hover:opacity-75 hover:cursor-pointer"
                                onClick={() => setAuthType("login")}
                            >
                                Login
                            </a>
                        </h1>

                                        
                    <button
                        type="submit"
                        className="bg-orange-700 rounded-md p-2 text-white w-[30%] font-semibold hover:opacity-75"
                    >
                        SIGNUP
                    </button>
                </div>
            </form>
        </>
    );
}




function ApplicantForgotPasswordForm({setAuthType}: {
    setAuthType: React.Dispatch<React.SetStateAction<string>>
}) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<{email: string}>()


    const onSubmit: SubmitHandler<{email: string}> = async (data) => {
        Swal.fire({
            title: 'Sending...',
            text: 'Your request is being processed',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        const response = await SendTemporaryPassword(data.email);

        if(response === "Temporary_Password_Sent"){
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Temporary Password Sent',
                text: 'You can now use the temporary password to login',
                showConfirmButton: false,
            });

            setTimeout(() => {
                setAuthType('login')
            }, 3000)
    
        }

        console.log("response forgot: ", response);
        

        reset();

    }

    return (
        <>
            <div className="flex flex-col items-center text-center gap-3">
                <h1 className="font-bold text-3xl">Forgot Password</h1>
                <p className="text-gray-500">Please provide the email where you want to get the temporary password</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full ">

                <div className="flex gap-1">
                    {errors.email && <span className="text-red-800 font-bold">Email is required.</span>}
                </div>

                <label className="font-semibold">Email</label>
                <input
                    type="email"
                    className="bg-gray-300 rounded-md p-2 focus:outline-orange-500"
                    {...register("email", { required: true })}
                />


                <div className="flex justify-between items-center mt-5">
                  
                    <button 
                        className="text-white bg-gray-500 w-[30%] p-2 rounded-md hover:opacity-75 hover:cursor-pointer" 
                        onClick={() => setAuthType("signup")}>
                            Back
                    </button> 

                    <button
                        type="submit"
                        className="bg-orange-700 rounded-md p-2 text-white w-[30%] font-semibold hover:opacity-75"
                    >
                        Send
                    </button>

                </div>

            </form>

        </>
    )
}


// export function ApplicantLogin({setRole}: {
//     setRole: React.Dispatch<React.SetStateAction<string>>
// }){
//     return(

//         <>
//             <FontAwesomeIcon 
//                 onClick={() => setRole("")}
//                 icon={faArrowLeft} 
//                 className="absolute top-3 left-3 text-3xl hover:opacity-75 hover:cursor-pointer"
//             />

//             <h1 className="text-black font-bold text-justify">Please log in with your Google account for application updates.</h1>    


//             {/* FOR DEVELOPMENT: http://localhost:8080/auth/google/login */}
//             {/* FOR PRODUCTION:  https://web-ptms.com/auth/google/login */}

//             <button 
//                 onClick={() => window.location.href = "http://localhost:8080/auth/google/login" } 
//                 className="p-3 flex items-center gap-2 bg-orange-400 rounded-md text-white font-bold hover:opacity-75"
//                 >

//                 <img src="/img/google.png" width={20}/> Login With Google
//             </button>
//         </>
       
//     )
// }