import { SubmitHandler, useForm } from "react-hook-form";
import { EditStaffAccountModalFormProps } from "../../types/props";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditStaffAccount } from "../../http/put/auth";
import Swal from "sweetalert2";
import { EditStaffAccountType } from "../../types/auth";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const EditStaffAccountModalForm: React.FC<EditStaffAccountModalFormProps> = ({ staff_id, name, email, setStaffData }) => {
    const staffAccountInputs = [
        { registerName: "name", value: name, inputType: "text", label: "Name" },
        { registerName: "email", value: email, inputType: "email", label: "Email" },
        { registerName: "old_password", value: "", inputType: "password", label: "Old Password", icon: true },
        { registerName: "new_password", value: "", inputType: "password", label: "New Password", icon: true },
    ];

    const { register, handleSubmit, reset } = useForm<EditStaffAccountType>();
    const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [editAccountError, setEditAccountError] = useState<string>();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: EditStaffAccount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["staff_accounts"] });
            setStaffData(undefined);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Staff Account Edited!",
                showConfirmButton: false,
                timer: 1500
            });
            
            reset();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Signup error:", error);
            if(error.response.data) setEditAccountError(error.response.data)
        },
    });

    const onSubmit: SubmitHandler<EditStaffAccountType> = (data) => {
        const mutateData = {
            ...data,
            staff_id,
        };
        mutation.mutate(mutateData);
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex fixed top-16 justify-center items-center w-full p-5">
                <div className="w-1/2 bg-white rounded-md p-4">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex-col flex">
                            <h1 className="text-black font-bold text-3xl">Edit Staff Information</h1>
                        </div>
                    </div>

                    {
                        editAccountError && (
                            <h1 className="text-red-800 font-bold text-lg mb-2">
                                {editAccountError}
                            </h1>
                        )
                    }

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-5">
                            {staffAccountInputs.map((data) => (
                                <div className="flex flex-col gap-2 relative" key={data.label}>
                                    <label className="font-bold">{data.label}</label>
                                    
                                    {/* Conditional password visibility logic */}
                                    <input
                                        key={data.registerName}
                                        type={
                                            data.registerName === "old_password" && showOldPassword
                                                ? "text"
                                                : data.registerName === "new_password" && showNewPassword
                                                ? "text"
                                                : data.inputType
                                        }
                                        defaultValue={data.value}
                                        className="bg-gray-300 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full"
                                        {...register(data.registerName as keyof EditStaffAccountType)}
                                    />

                                    {/* Show password toggle only for old_password and new_password */}
                                    {data.registerName === "old_password" && (
                                        <FontAwesomeIcon
                                            icon={showOldPassword ? faEyeSlash : faEye}
                                            className="absolute right-3 top-3/4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                            onClick={() => setShowOldPassword(!showOldPassword)}
                                        />
                                    )}
                                    {data.registerName === "new_password" && (
                                        <FontAwesomeIcon
                                            icon={showNewPassword ? faEyeSlash : faEye}
                                            className="absolute right-3 top-3/4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-400 rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
                        >
                            EDIT
                        </button>

                        <button
                            type="button"
                            onClick={() => setStaffData(undefined)}
                            className="bg-black rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
                        >
                            CLOSE
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
};
