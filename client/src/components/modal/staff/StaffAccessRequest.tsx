import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteStaffAccessRequest } from "../../../http/delete/access";
import Swal from "sweetalert2";
import { OpenGrantedPage } from "../../../http/post/access";
import { useFetchStaffAR } from "../../../hook/useFetchStaffAR";


const StaffRequestAccessModal = () => {

    const queryClient = useQueryClient();

   const { staffAccessRequests } = useFetchStaffAR();

    const deleteRequestMutation = useMutation({
        mutationFn: DeleteStaffAccessRequest,
        onSuccess: () => {
            
            queryClient.invalidateQueries({ queryKey: ['staff_access_request'] })
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

    const grantedPageMutation = useMutation({
        mutationFn: OpenGrantedPage,
        onSuccess: (data) => {

            console.log("response from open page: ", data);

            switch (data.data) {
                case "RECEIVER":
                    window.location.href = "/receiver/pending/applications";
                    break;
                case "SCANNER":
                    window.location.href = "/scanner/approved";
                    break;
                case "RELEASER":
                    window.location.href = "/releaser/application";
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


    const handleOpenGrantedStaffPage = (access_role: string) => {
        grantedPageMutation.mutate(access_role)
    }


    const handleDeleteAccessRequest = (user_id: number) => {
        deleteRequestMutation.mutate(user_id)
    }

    return (
        <div className="absolute top-[10rem] right-[25rem] bg-gray-100 w-[45%] h-[220px] z-10 flex flex-col gap-5 items-center p-2 rounded-md font-semibold overflow-auto">
            <h1 className="text-blue-700 text-2xl">Access Request</h1>

            { 
                staffAccessRequests.length === 0 ? (
                    <h1 className="text-lg">Currently no access request being granted or denied</h1>
                ) : (
                    staffAccessRequests && staffAccessRequests.map((request) => (
                        <div 
                            key={request.id} 
                            className="flex justify-between items-center gap-5 font-semibold border border-gray-400 rounded-md p-2"
                        >
                            <h1 className="text-gray-800">Request to access {request.access_role} page has been {request.status}</h1>

                            {
                                request.status != "DENIED" && (
                                    <button 
                                        onClick={() => handleOpenGrantedStaffPage(request.access_role)}
                                        className="bg-orange-400 rounded-md p-3 text-white text-sm hover:opacity-75"
                                    >
                                        Open
                                    </button>
                                )
                            }
    
                            <button 
                                onClick={() => handleDeleteAccessRequest(request.id)}
                                className="bg-red-600 rounded-md p-3 text-white text-sm hover:opacity-75"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )
            }

            <div className="mt-auto text-gray-600 text-sm text-center pb-2">
                * Note: Each permission granted you have 1 day to access the role's account before the permission expires. Make sure to wrap up everything you need!
            </div>

        </div>
    );
};

export default StaffRequestAccessModal;
