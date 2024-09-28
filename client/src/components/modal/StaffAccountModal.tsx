import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { StaffAccount } from "../../types/auth";
import { StaffAccountModalFormProps } from "../../types/props";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateStaffAccount } from "../../http/post/auth";
import Swal from "sweetalert2";
import { useState } from "react";

const staffAccountInputs = [
    { registerName: "name", placeHolder: "Name", inputType: "text" },
    { registerName: "email", placeHolder: "Email", inputType: "email" },
    { registerName: "role", placeHolder: "Role", inputType: "text" },
    { registerName: "password", placeHolder: "Password", inputType: "password" }
];

export const StaffAccountModalForm: React.FC<StaffAccountModalFormProps> = ({ setOpenModalForm }) => {
    const { register, handleSubmit, reset, setValue } = useForm<StaffAccount>();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: CreateStaffAccount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["staff_accounts"] });
            setOpenModalForm(false);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Staff Account Created!",
                showConfirmButton: false,
                timer: 1500
            });

            reset();
        },
        onError: (error: any) => {
            console.error("Signup error:", error);
        },
    });

    const onSubmit: SubmitHandler<StaffAccount> = (data) => {
        mutation.mutate(data);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uppercaseValue = event.target.value.toUpperCase();
        setValue("role", uppercaseValue);
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex fixed top-24 justify-center items-center w-full p-2">
                <div className="w-1/2 bg-white rounded-md p-8">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex-col flex">
                            <h1 className="text-black font-bold text-3xl">Enter Staff Information</h1>
                        </div>

                        <FontAwesomeIcon
                            icon={faX}
                            className="text-3xl hover:opacity-75 hover:cursor-pointer font-bold"
                            onClick={() => setOpenModalForm(false)}
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-5">
                            {staffAccountInputs.map((data) => (
                                <input
                                    key={data.registerName}
                                    type={data.inputType}
                                    placeholder={data.placeHolder}
                                    className="bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full"
                                    {...register(data.registerName as keyof StaffAccount)}
                                    onChange={data.registerName === "role" ? handleRoleChange : undefined}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
