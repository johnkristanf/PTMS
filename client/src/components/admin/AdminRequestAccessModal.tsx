import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UpdateRequestAccessStatusTypes } from "../../types/access";
import { UpdateRequestAccessStatus } from "../../http/put/access";
import Swal from "sweetalert2";
import { useState } from "react";
import { FetchLoginAccount } from "../../http/get/auth";
import { LoginAccount } from "../../types/auth";
import { DeleteStaffAccessRequest } from "../../http/delete/access";
import { OpenGrantedPage } from "../../http/post/access";
import { useFetchAdminAR } from "../../hook/useFetchAdminAR";


const AdminRequestAccessModal = () => {

    
    const { data: response } = useQuery({
        queryKey: ["login_account"],
        queryFn: FetchLoginAccount,
    });

    const loginAccount: LoginAccount = response?.data; 

    const queryClient = useQueryClient();
    const [accessStatus, setAccessStatus] = useState<string>();

    

    const mutation = useMutation({
        mutationFn: UpdateRequestAccessStatus,
        onSuccess: () => {
            
            queryClient.invalidateQueries({ queryKey: ['admin_access_request'] })
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
    

    const handleUpdateRequestAccessStatus = (id: number, status: string) => {

        setAccessStatus(status)
        const data: UpdateRequestAccessStatusTypes = {
            id, 
            status
        }

        console.log("data: ", data);
        

        mutation.mutate(data)
    }


    const deleteRequestMutation = useMutation({
        mutationFn: DeleteStaffAccessRequest,
        onSuccess: () => {
            
            queryClient.invalidateQueries({ queryKey: ['admin_access_request'] })
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Request Deleted Successfully`,
            });
    
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Delete Request Access error:", error);
        },
    });


    const handleDeleteAccessRequest = (request_id: number) => {
        deleteRequestMutation.mutate(request_id)
    }


    const grantedPageMutation = useMutation({
        mutationFn: OpenGrantedPage,
        onSuccess: (data) => {

            console.log("response from open page: ", data);

            switch (data.data) {
                case "architectural":
                    window.location.href = "/architectural/paid/applications";
                    break;
                case "electrical":
                    window.location.href = "/electrical/paid/applications";
                    break;
                case "civil":
                    window.location.href = "/civil/paid/applications";
                    break;
                    
                default:
                    window.location.href = "/";
                    break;
            }            
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.error("Open Granted Page Access Error:", error);
        },
    });


    const handleOpenGrantedAdminPage = (access_role: string) => {
        grantedPageMutation.mutate(access_role)
    }

    const { adminAccessRequest } = useFetchAdminAR();


    return (
        <div className="absolute top-[12rem] right-[25rem] bg-gray-100 w-[45%] h-[220px] z-10 flex flex-col gap-5 items-center p-2 rounded-md font-semibold overflow-auto">
            <h1 className="text-blue-700 text-xl">Admin Access Request</h1>

                { 
                    adminAccessRequest.length === 0 ? (
                        <h1 className="text-lg">No request available</h1>
                    ): (
                        adminAccessRequest.map((request) => (
                            <div 
                                key={request.id} 
                                className="flex justify-between items-center gap-5 font-semibold border border-gray-400 rounded-md p-2"
                            >
                                <h1 className="text-gray-600">
                                    {/* access_role + loginAccount.adminType = you are the receiver of the access request */}

                                    {/* user_id + loginAccount.id = you are the sender of the access request */}


                                    {
                                        request.access_role === loginAccount.adminType && request.status === "PENDING"
                                            && (`${request.role} admin want to access your Page`)
                                    }

                                    {
                                        request.user_id === loginAccount.id && request.status === "PENDING"
                                            && `Please Wait for the approval of ${request.access_role} admin`
                                    }


                                    {
                                        request.access_role === loginAccount.adminType && request.status === "GRANTED"
                                            && (`You have granted ${request.role} admin to access your page`)
                                    }

                                    {
                                        request.user_id === loginAccount.id && request.status === "GRANTED"
                                            && (`The request to access ${request.access_role} admin has been granted`)
                                    }

                                    {
                                        request.access_role === loginAccount.adminType && request.status === "DENIED"
                                            && (`You denied ${request.role} admin to access your page`)
                                    }

                                    {
                                        request.user_id === loginAccount.id && request.status === "DENIED"
                                            && (`The request to access ${request.access_role} admin has been denied`)
                                    }
                                    
                                </h1>

                                {
                                    request.access_role === loginAccount.adminType && request.status === "PENDING" && (
                                        <>
                                            <button 
                                                className="bg-blue-700 rounded-md p-3 text-white text-sm hover:opacity-75"
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

                                        </>
                                    )
                                }

                            {
                                request.status === "GRANTED" && request.user_id === loginAccount.id && (
                                    <>
                                        <button 
                                            onClick={() => handleOpenGrantedAdminPage(request.access_role)}
                                            className="bg-blue-700 rounded-md p-3 text-white text-sm hover:opacity-75"
                                        >
                                            Open
                                        </button>

                                        {/* <button 
                                            onClick={() => handleDeleteAccessRequest(request.id)}
                                            className="bg-red-600 rounded-md p-3 text-white text-sm hover:opacity-75"
                                            >
                                            Delete
                                        </button> */}
                                    </>
                                )
                            }

                            {
                                request.status === "DENIED" && request.user_id === loginAccount.id && (
                                   
                                    <button 
                                        onClick={() => handleDeleteAccessRequest(request.id)}
                                        className="bg-red-600 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    >
                                        Delete
                                    </button>
                                )
                            }
    
                            
        
                                
                            </div>
                        ))
                    )
                
                }

                <div className="mt-auto text-gray-600 text-sm text-center pb-2">
                    * Note: After accepting they will have 1 day permission to access the specified role
                </div>
        </div>
    );
};

export default AdminRequestAccessModal;