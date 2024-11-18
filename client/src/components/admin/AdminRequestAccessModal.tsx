import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchPendingAccessRequest } from "../../http/get/access";
import { FetchPendingAccessRequestTypes, UpdateRequestAccessStatusTypes } from "../../types/access";
import { UpdateRequestAccessStatus } from "../../http/put/access";
import Swal from "sweetalert2";
import { useState } from "react";


const AdminRequestAccessModal = () => {

    const queryClient = useQueryClient();
    const [accessStatus, setAccessStatus] = useState<string>();

    const { data: pendingAccessRequestResponse } = useQuery({
        queryKey: ["pending_access_request"],
        queryFn: async () => {
            const data = await FetchPendingAccessRequest();
            return data;
        },
    });

    const mutation = useMutation({
        mutationFn: UpdateRequestAccessStatus,
        onSuccess: () => {
            
            queryClient.invalidateQueries({ queryKey: ['pending_access_request'] })
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Access Request is Successfully ${accessStatus}`,
            });
    
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Request Access error:", error);
        },
    });

    const pendingAccessReqest: FetchPendingAccessRequestTypes[] = pendingAccessRequestResponse?.data || [];

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
        <div className="absolute top-[12rem] right-[25rem] bg-gray-100 w-[45%] h-[200px] z-10 flex flex-col gap-5 items-center p-2 rounded-md font-semibold"> {/* Positioning the modal below */}
            <h1 className="text-orange-600 text-xl">Pending Access Request</h1>

                { 
                    pendingAccessReqest.length === 0 ? (
                        <h1 className="text-lg">No request available</h1>
                    ): (
                        pendingAccessReqest.map((request) => (
                            <div 
                                key={request.id} 
                                className="flex justify-between items-center gap-5 font-semibold"
                            >
                                <h1 className="text-gray-600">{request.role} want to access the {request.access_role} Page</h1>
        
                                <button 
                                    className="bg-green-600 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    onClick={() => handleUpdateRequestAccessStatus(request.id, "GRANTED")}
                                >
                                    Accept
                                </button>
        
                                <button 
                                    className="bg-red-800 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    onClick={() => handleUpdateRequestAccessStatus(request.id, "DENIED")}
                                >
                                    Deny
                                </button>
                            </div>
                        ))
                    )
                
                }
        </div>
    );
};

export default AdminRequestAccessModal;