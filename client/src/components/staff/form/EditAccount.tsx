import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EditStaffAccount } from "../../../http/put/auth";
import { FetchStaffAccountById } from "../../../http/get/auth";
import { EditStaffAccountType, StaffAccountFetch } from "../../../types/auth";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function EditAccountForm() {
    const { data: response, isLoading, isError } = useQuery({
        queryKey: ["staff_account"],
        queryFn: FetchStaffAccountById,
    });

    const staffAccount: StaffAccountFetch = response?.data;
    const [editAccountError, setEditAccountError] = useState<string>();

    // States to toggle password visibility
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const staffAccountInputs = [
        { registerName: "name", value: staffAccount?.name, inputType: "text", label: "Name", disabled: true },
        { registerName: "email", value: staffAccount?.email, inputType: "email", label: "Email" },
        {
            registerName: "old_password",
            value: "",
            inputType: showOldPassword ? "text" : "password",
            label: "Old Password",
            toggleShow: () => setShowOldPassword((prev) => !prev), // Toggles visibility
            showPassword: showOldPassword,
        },
        {
            registerName: "new_password",
            value: "",
            inputType: showNewPassword ? "text" : "password",
            label: "New Password",
            toggleShow: () => setShowNewPassword((prev) => !prev), // Toggles visibility
            showPassword: showNewPassword,
        },
    ];

    const { register, handleSubmit, reset } = useForm<EditStaffAccountType>();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: EditStaffAccount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["staff_account"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Edited!",
                showConfirmButton: false,
                timer: 1500
            });

            reset();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Edit Account Error :", error.response.data);
            if (error.response.data) {
                setEditAccountError(error.response.data);
            }
        },
    });

    const onSubmit: SubmitHandler<EditStaffAccountType> = (data) => {
        const staff_id = staffAccount?.id;

        const mutateData = {
            ...data,
            staff_id,
        };
        mutation.mutate(mutateData);
    };

    if (isLoading) return <div className="text-white font-bold text-3xl">Fetching Staff Account...</div>;
    if (isError) return <div className="text-red-500 font-bold text-3xl">Error fetching staff account</div>;
    if (!staffAccount) return <div className="text-red-500 font-bold text-3xl">No staff account data available</div>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full bg-white p-6 rounded-md">
            <div className="flex flex-col gap-5">
                {editAccountError && (
                    <h1 className="text-red-800 font-bold text-lg">
                        {editAccountError}
                    </h1>
                )}

                {staffAccountInputs.map((data) => (
                    <div className="flex flex-col gap-2 relative" key={data.label}>
                        <label className="font-bold">{data.label}</label>
                        <input
                            key={data.registerName}
                            type={data.inputType}
                            defaultValue={data.value}
                            disabled={data.disabled}
                            required
                            className="bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full"
                            {...register(data.registerName as keyof EditStaffAccountType)}
                        />
                        
                        {/* Show/hide password toggle for password fields */}
                        {data.registerName.includes("password") && (
                            <FontAwesomeIcon
                                icon={data.showPassword ? faEyeSlash : faEye}
                                onClick={data.toggleShow}
                                className="absolute right-3 top-[43px] text-xl text-gray-700 cursor-pointer hover:text-black"
                            />
                        )}
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="bg-orange-500 rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
            >
                SAVE
            </button>
        </form>
    );
}
