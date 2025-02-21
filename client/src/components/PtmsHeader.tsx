

export function PTMSHeader(){
    return(
        <div className="fixed top-0 w-full bg-orange-700 h-[12vh] flex items-center justify-center gap-2 z-[999] pl-10">
            <img src="/img/PTMS_LOGO.jpg" width={50} height={50} className="rounded-full" />

            <h1 className="text-white text-2xl font-semibold">
                Panabo City Engineer's Office Transaction Management System for Issuance of Permits Application Services.
            </h1>
        </div>
    )
}


export function ApplicationNoteSubHeader(){
    return(
        <div className="fixed top-[75px] w-full bg-orange-700 h-[10vh] flex justify-center gap-2 z-[999] font-semibold text-white border border-t-white">
            {/* <h1 className='text-xl'>Note:</h1> */}

            <div className="flex gap-3">
                                <h1 className='text-center font-bold text-md w-full'>Note: Please secure copies of requirements 
                                    and permits to be submitted to City's Engineering Office. <br /> Completion and occupancy cannot be 
                                    access once your application is disapproved
                                </h1>

                                {/* <div className="flex flex-col font-bold text-sm">
                                    <h1>Thank You</h1>
                                    <h1>City Engineering Office</h1>
                                </div>     */}
            </div>
        </div>
    )
}