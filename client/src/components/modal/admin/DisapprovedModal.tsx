import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { UpdateApplicationDisapprovedAdmin } from '../../../http/put/application';
import { DisapprovalData } from '../../../types/application';

export function DisapprovedModal({ disapprovalData, setOpenDisapprovedModal }: {
    disapprovalData: DisapprovalData | undefined
    setOpenDisapprovedModal: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const queryClient = useQueryClient();
    const [message, setMessage] = useState<string>('');


    const mutation = useMutation({
        mutationFn: UpdateApplicationDisapprovedAdmin,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["paid_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Application Disapproved",
                showConfirmButton: false,
                timer: 1500,
            });

            setOpenDisapprovedModal(false)
        },
        onError: (error: unknown) => {
            console.error("Signup error:", error);
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
        }
    });

    const onDisapproved = (e: React.FormEvent) => {
        e.preventDefault();

        if(disapprovalData){
            disapprovalData.disapproval_message = message
            disapprovalData.user_id = Number(disapprovalData.user_id)
            mutation.mutate(disapprovalData)
        }
    }

    console.log("disapproval data: ", disapprovalData);
    

    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            <div className="flex flex-col bg-white rounded-md p-8 fixed top-12 w-1/2">
                <div className="flex justify-between items-center">
                    <div className="flex-col flex">
                        <h1 className="font-bold text-2xl">Reason for Application Disapproval</h1>
                        <h1 className="font-bold text-md mb-5">Sending message to {disapprovalData?.email}</h1>
                    </div>
                </div>

                <form onSubmit={onDisapproved} className="flex flex-col">
                    <div className="flex flex-col gap-5">

                    <textarea
                        placeholder="Enter your message here..."
                        className="bg-gray-200 p-3 font-bold rounded-md placeholder-black focus:outline-none h-[150px]"
                        style={{ resize: "none" }}
                        onChange={(e) => setMessage(e.target.value)} 
                        value={message}
                    />

                    </div>

                    <button
                        className={`bg-orange-500 text-white font-bold rounded-md p-2 mt-5 hover:opacity-75`}
                        type="submit"
                    >
                        SEND
                    </button>

                    
                </form>

                <button
                    className={`bg-black text-white font-bold rounded-md p-2 mt-5 hover:opacity-75`}
                    onClick={() => setOpenDisapprovedModal(false)}

                >
                    CANCEL
                </button>

            </div>
        </div>
    );
}
