import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateRequestAccessStatusTypes } from "../../types/access";
import { UpdateRequestAccessStatus } from "../../http/put/access";
import Swal from "sweetalert2";
import { useState } from "react";
import { useFetchStaffPendingAR } from "../../hook/useFetchStaffPendingAR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


const DashboardStaffARModal = ({setOpenStaffAccessModal}: {
    setOpenStaffAccessModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const queryClient = useQueryClient();
    const [accessStatus, setAccessStatus] = useState<string>();

    const { pendingAccessReqest } = useFetchStaffPendingAR();

    const mutation = useMutation({
        mutationFn: UpdateRequestAccessStatus,
        onSuccess: () => {
            
            queryClient.invalidateQueries({ queryKey: ['staff_pending_access_request'] })
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Access Request is Successfully ${accessStatus}`,
              text: "Please wait for the admin approval"
            });
    
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Request Access error:", error);
        },
    });

    const handleUpdateRequestAccessStatus = (id: number, status: string) => {

        setAccessStatus(status)
        const data: UpdateRequestAccessStatusTypes = {
            id, 
            status
        }

        console.log("data: ", data);
        

        mutation.mutate(data)
    }


    return (
        <div className="absolute top-[12rem] right-[10rem] bg-gray-100 w-[45%] h-[220px] z-10 flex flex-col gap-5 items-center p-2 rounded-md font-semibold overflow-auto">
            <h1 className="text-orange-600 text-xl">Staff Access Request</h1>

                <FontAwesomeIcon 
                    icon={faX} 
                    className="absolute top-3 right-3 text-2xl hover:opacity-75 hover:cursor-pointer"
                    onClick={() => setOpenStaffAccessModal(false)}
                />

                { 
                    pendingAccessReqest.length === 0 ? (
                        <h1 className="text-lg">No request available</h1>
                    ): (
                        pendingAccessReqest.map((request) => (
                            <div 
                                key={request.id} 
                                className="flex justify-between items-center gap-5 font-semibold border border-gray-400 rounded-md p-2"
                            >
                                <h1 className="text-gray-600">{request.role} want to access the {request.access_role} Page</h1>
        
                                <button 
                                    className="bg-orange-400 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    onClick={() => handleUpdateRequestAccessStatus(request.id, "GRANTED")}
                                >
                                    Accept
                                </button>
        
                                <button 
                                    className="bg-red-600 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    onClick={() => handleUpdateRequestAccessStatus(request.id, "DENIED")}
                                >
                                    Deny
                                </button>
                            </div>
                        ))
                    )
                
                }

                <div className="mt-auto text-gray-600 text-sm text-center pb-2">
                    * Note: After accepting the staff they will have 1 day permission to access the specified role
                </div>
        </div>
    );
};

export default DashboardStaffARModal;