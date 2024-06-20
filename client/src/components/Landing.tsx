import { useState } from "react";
import { classNames } from "../helpers/classNames";
import { ApplicantLogin, LoginForm } from "./Login";

export function LoginRoles(){

    const [role, setRole] = useState<string>("")

    const roles = [
        {name: "APPLICANT", clickedRole: "applicant"},
        {name: "ADMIN", clickedRole: "admin"},
        {name: "STAFF", clickedRole: "staff"},
    ]

    return(
        <div className={`flex flex-col relative items-center justify-around w-[30%] ${role === "applicant" ? "h-[40%]" : "h-[60%]"}  p-12 rounded-md bg-white`} >

            {
                role === "" && (
                    <>

                        <div className="flex items-center gap-2">
                            <img src="/img/ENGINEER_LOGO.png" alt="company_logo" width={70} />
                            <h1 className="font-bold text-3xl text-gray-600">PTMS USER</h1>
                        </div>
                    
                        {
                            roles.map((data) => (
                                <button
                                    key={data.name}
                                    className={classNames("p-3 w-full bg-orange-400 rounded-md text-white font-bold hover:bg-gray-400 mt-5")}
                                    onClick={() => setRole(data.clickedRole)}
                                >
                                    { data.name }

                                </button>
                            ))
                        }
                    </>
                   
                )
            }

            { role === "applicant" && <ApplicantLogin setRole={setRole} /> }

            { (role === "staff" || role === "admin") && <LoginForm setRole={setRole} /> }
 

        </div>

    )
}