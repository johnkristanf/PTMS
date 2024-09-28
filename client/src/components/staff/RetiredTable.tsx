
export function RetiredTable(){
    
    return(

        <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md">

            <div className="overflow-x-auto ">
                <div className="inline-block min-w-full py-2 ">

                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Address</th>
                            <th scope="col" className="px-6 py-4">Permit Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">Nicole Pacaldo</td>
                            <td className="whitespace-nowrap px-6 py-4">nicole@gmail.com</td>
                            <td className="whitespace-nowrap px-6 py-4">Purok 4 Cabili Salvacion 8105</td>
                            <td className="whitespace-nowrap px-6 py-4">Building</td>                        
                        </tr>

                        
                       
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}