import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ReleaseDateModal({setOpenReleaseModal}: {
    setOpenReleaseModal: React.Dispatch<React.SetStateAction<boolean >>
}){

    return(
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">

            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            <div className="flex flex-col bg-white rounded-md p-8 fixed top-12 w-1/2">

                <div className="flex justify-between items-center">
                    <div className="flex-col flex">
                        <h1 className="font-bold text-3xl">Set Release Date</h1>
                        <h1 className="font-bold text-md mb-5">Sending document release date via gmail</h1>
                    </div>

                    <FontAwesomeIcon 
                        icon={faX} 
                        onClick={() => setOpenReleaseModal(false)}
                        className="text-3xl hover:opacity-75 hover:cursor-pointer font-bold"
                    />
                    
                </div>

              


                <form className="flex flex-col">

                    <div className="flex flex-col gap-5">

                        <input 
                            type="text" 
                            placeholder="Enter Message"
                            className="bg-gray-400 p-3 font-bold rounded-md placeholder-black focus:outline-none"
                        />

                        <label className="font-bold text-2xl mt-4">Estimated Date:</label>

                        <label className="font-bold">From:</label>
                        <input 
                            type="date" 
                            className=" p-3 font-bold rounded-md placeholder-gray-600 focus:outline-none"
                        />

                        <label className="font-bold">To:</label>
                        <input 
                            type="date" 
                            className="p-3 font-bold rounded-md placeholder-gray-600 focus:outline-none"
                        />

                    </div>
                    
                    
                    <button 
                        className="bg-orange-500 text-white font-bold rounded-md p-2 mt-5 hover:opacity-75"
                        type="submit"
                        >
                            SAVE
                    </button>
                </form>
            </div>
        </div>
       
    )
}
