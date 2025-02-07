import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchAdminAR } from "../../hook/useFetchAdminAR";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function AdminArNotifButton({
    toggleAdminAccessModal
}: {
    toggleAdminAccessModal: () => void
}){

    const { adminAccessRequest } = useFetchAdminAR();

    return (
        <div className="flex gap-1">
            {adminAccessRequest && adminAccessRequest.length > 0 && (
               <div className="flex items-center justify-center text-white bg-red-500 rounded-full w-4 h-4 text-sm">
                    {adminAccessRequest.length}
                </div>
            )}

            <FontAwesomeIcon 
                icon={faBell}
                onClick={toggleAdminAccessModal}
            />

            {/* <button 
                className="text-2xl hover:opacity-75 hover:cursor-pointer text-sm bg-gray-500 text-white rounded-md p-2"
                onClick={toggleAdminAccessModal}
            >
                Admin AR 
            </button> */}
        </div>
    )

}

export default AdminArNotifButton;