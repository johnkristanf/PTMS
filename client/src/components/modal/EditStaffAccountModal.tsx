import { SubmitHandler, useForm } from "react-hook-form";
import { EditStaffAccountModalFormProps } from "../../types/props";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditStaffAccount } from "../../http/put/auth";
import Swal from "sweetalert2";



export const EditStaffAccountModalForm: React.FC<EditStaffAccountModalFormProps> = ({ staff_id, name, email, setStaffData }) => {

    const staffAccountInputs = [
        { registerName: "name", value: name, inputType: "text", label: "Name" },
        { registerName: "email", value: email, inputType: "email", label: "Email" },
        { registerName: "password", value: "", inputType: "password", label: "Password" },
    ];

    const { register, handleSubmit, reset } = useForm<{name: string, email: string, password: string}>();

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
        onError: (error: any) => {
            console.error("Signup error:", error);
        },
    });

    const onSubmit: SubmitHandler<{name: string, email: string, password: string}> = (data) => {
        const mutateData = {
            ...data,
            staff_id,
        };
        mutation.mutate(mutateData);
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex fixed top-5 justify-center items-center w-full p-2">
                <div className="w-1/2 bg-white rounded-md p-8">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex-col flex">
                            <h1 className="text-black font-bold text-3xl">Edit Staff Information</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-5">
                            {staffAccountInputs.map((data) => (
                                <div className="flex flex-col gap-2" key={data.label}>
                                    <label className="font-bold">{data.label}</label>
                                    <input
                                        key={data.registerName}
                                        type={data.inputType}
                                        defaultValue={data.value}
                                        className="bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full"
                                        {...register(data.registerName as keyof { name: string, email: string, password: string })}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
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
