import { useState, useEffect } from 'react';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SetReleaseDate } from '../../../http/put/application';
import { ReleaseDateData } from '../../../types/application';

export function ReleaseDateModal({ setOpenReleaseModal, releaseDateData }: {
    setOpenReleaseModal: React.Dispatch<React.SetStateAction<boolean>>,
    releaseDateData: ReleaseDateData | undefined
}) {

    const queryClient = useQueryClient();

    const [message, setMessage] = useState<string>('');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');

    const isSaveDisabled = !message.trim() || !fromDate || !toDate;

    const mutation = useMutation({
        mutationFn: SetReleaseDate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });
            queryClient.invalidateQueries({ queryKey: ["paid_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Release Date Set Successfully",
                showConfirmButton: false,
                timer: 1500,
            });

            setOpenReleaseModal(false);
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
        },

        onError: (error: unknown) => {
            console.error("Request error:", error);
        },
    });

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; 
    };

    // Automatically set 'toDate' to 1 week after 'fromDate'
    useEffect(() => {
        if (fromDate) {
            const from = new Date(fromDate);
            from.setDate(from.getDate() + 7); // Add 7 days
            const newToDate = from.toISOString().split('T')[0]; // Set to date in YYYY-MM-DD format
            setToDate(newToDate);
        }
    }, [fromDate]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (releaseDateData) {
            const formattedFromDate = formatDate(fromDate);
            const formattedToDate = formatDate(toDate);

            mutation.mutate({
                application_id: releaseDateData.application_id,
                message: message,
                date_from: formattedFromDate,
                date_to: formattedToDate,
                email: releaseDateData.email,
                user_id: Number(releaseDateData.user_id),
            });
        }
    };

    useEffect(() => {
        if(releaseDateData?.status === "Approved"){
            setMessage("Message na pang professional here")
        }
    }, [releaseDateData?.status])

    console.log("message: ", message);
    

    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            <div className="flex flex-col bg-white rounded-md p-8 fixed top-24 w-1/2 h-[80%] overflow-auto">
                <div className="flex justify-between items-center">
                    <div className="flex-col flex">
                        <h1 className="font-bold text-3xl">Set Release Date</h1>
                        <h1 className="font-bold text-md mb-5">Sending document release date to {releaseDateData?.email}</h1>
                    </div>

                    <FontAwesomeIcon
                        icon={faX}
                        onClick={() => setOpenReleaseModal(false)}
                        className="text-3xl hover:opacity-75 hover:cursor-pointer font-bold"
                    />
                </div>

                <form onSubmit={onSubmit} className="flex flex-col">
                    <div className="flex flex-col gap-5">

                        {
                            releaseDateData && releaseDateData.status == "Disapproved" && (
                                <textarea
                                    placeholder="Enter your message here..."
                                    className="h-[100px] bg-gray-200 p-3 font-bold rounded-md placeholder-black focus:outline-none"
                                    value={message}
                                    style={{ resize: "none" }}
                                    onChange={(e) => setMessage(e.target.value)} 
                                />
                            )
                        }
                        

                        <label className="font-bold text-2xl mt-4">Estimated Date:</label>

                        <label className="font-bold">From:</label>
                        <input
                            type="date"
                            className="p-3 font-bold rounded-md placeholder-gray-600 focus:outline-none"
                            value={fromDate}
                            min={getTodayDate()} 
                            onChange={(e) => setFromDate(e.target.value)} 
                        />

                        <label className="font-bold">To:</label>
                        <input
                            type="date"
                            className="p-3 font-bold rounded-md placeholder-gray-600 focus:outline-none"
                            value={toDate}
                            min={fromDate || getTodayDate()} 
                            onChange={(e) => setToDate(e.target.value)}
                            readOnly 
                        />
                    </div>

                    <button
                        className={`${
                            isSaveDisabled
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-orange-500 hover:opacity-75'
                        } text-white font-bold rounded-md p-2 mt-5`}
                        type="submit"
                        disabled={isSaveDisabled} 
                    >
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    );
}
