import '../../../assets/scrollStyle.css';

export const ApplicationFileModal = ({setOpenFile}:{
    setOpenFile: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return(
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>
                
            <div className="fixed top-0 w-full h-full flex items-center justify-center rounded-md p-5">

                <div className="bg-white w-[45%] p-5 rounded-md h-[70%]">


                    <h1 className='text-3xl font-semibold mb-3'>Files</h1> 

                    {/* TABLE DIV */}
                        <div className="flex flex-col bg-white w-full h-[70%] rounded-md p-3 ">

                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light text-center">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Files</th>
                                            <th scope="col" className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="border-b transition duration-300 ease-in-out hover:cursor-pointer dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium">building_permit.pdf</td>
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium flex gap-3 justify-center">
                                                <button className='bg-green-600 rounded-md p-2 text-white hover:opacity-75'>View File</button>
                                                <button className='bg-orange-500 rounded-md p-2 text-white hover:opacity-75'>Download PDF</button>
                                            </td>
                                        </tr>

                                        <tr className="border-b transition duration-300 ease-in-out hover:cursor-pointer dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium">plumbing_permit.pdf</td>
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium flex gap-3 justify-center">
                                                <button className='bg-green-600 rounded-md p-2 text-white hover:opacity-75'>View File</button>
                                                <button className='bg-orange-500 rounded-md p-2 text-white hover:opacity-75'>Download PDF</button>
                                            </td>
                                        </tr>

                                        <tr className="border-b transition duration-300 ease-in-out hover:cursor-pointer dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium">electronics_permit.pdf</td>
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium flex gap-3 justify-center">
                                                <button className='bg-green-600 rounded-md p-2 text-white hover:opacity-75'>View File</button>
                                                <button className='bg-orange-500 rounded-md p-2 text-white hover:opacity-75'>Download PDF</button>
                                            </td>
                                        </tr>

                                    
                                    
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                    </div>
                    {/* END OF TABLE DIV */}

                    <button 
                        onClick={() => setOpenFile(false)}
                        className='bg-black rounded-md p-2 w-full text-white hover:opacity-75 mt-5'>
                            Close
                    </button>

                </div>

                    


                </div>

            </div>

    )
}