import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useFetchStaffPendingAR } from "../../hook/useFetchStaffPendingAR";

function StaffARNotifButton({
    toggleStaffAccessModal
}: {
    toggleStaffAccessModal: () => void
}){

    const { pendingAccessReqest } = useFetchStaffPendingAR();
    

    return (
        <div className="flex gap-1">
            {pendingAccessReqest && pendingAccessReqest.length > 0 && (
                <div className="flex items-center justify-center text-white bg-red-500 rounded-full w-4 h-4 text-sm">
                    {pendingAccessReqest.length}
                </div>
            )}

            <FontAwesomeIcon 
                icon={faUsers}
                onClick={toggleStaffAccessModal}
            />

           
        </div>
    )

}

export default StaffARNotifButton;