import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Swal from 'sweetalert2';
import { deleteInbox } from "../../../http/delete/inbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function InboxModal({ setOpenInbox, inboxInfo }: {
    setOpenInbox: React.Dispatch<React.SetStateAction<boolean>>
    inboxInfo: Inboxes
}) {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: deleteInbox,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inboxes"] });

            Swal.fire({
              title: "Deleted!",
              text: "Inbox Deleted Successfully",
              icon: "success",
              confirmButtonColor: "#3085d6",
            }).then(result => {
                if(result.isConfirmed) setOpenInbox(false)
            })
      
        }
    })

    const formattedMessage = inboxInfo.message.split('\n').map((line, index) => (
        <p key={index} style={{ marginBottom: '1em' }}>{line}</p>
    ));
    

    
    const DeleteInbox = (inbox_id: number) => {
    
        Swal.fire({
          title: "Are you sure?",
          text: "On Deleting this Inbox",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#800000",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!"
    
        }).then((result) => {
          if (result.isConfirmed) mutation.mutate(inbox_id)
        });
    
    };

  return (
    <>
        <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

        <div className="w-full fixed top-3 h-screen flex justify-center">

            <div className="bg-white rounded-md h-[90%] w-1/2 p-8 flex flex-col items-end overflow-y-auto">

                <div className="w-full flex justify-between mb-3">
                    <h1 className="font-bold text-4xl">Inbox</h1>
                    <button
                        onClick={() => DeleteInbox(inboxInfo.inbox_id)}
                        className="bg-red-800 text-white rounded-md p-2 whitespace-nowrap mb-3"
                        >
                            {
                                <FontAwesomeIcon icon={faTrash} />
                            }
                    </button>
                </div>

               
                <div className="font-semibold text-justify text-gray-700 h-full">
                    {formattedMessage}
                </div>

                <button 
                    onClick={() => setOpenInbox(false)}
                    className="bg-black rounded-md p-3 w-full text-white font-bold hover:opacity-75 mt-4">
                    Close
                </button>
                
            </div>
           
        </div>


      
    </>
  );
}

export default InboxModal;
