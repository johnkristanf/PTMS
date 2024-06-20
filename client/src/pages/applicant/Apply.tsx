

function ApplyButtonPage(){
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        

            <div className="bg-orange-100 w-[35%] h-[45%] p-3 flex flex-col items-center justify-between rounded-md">

                <div className="w-full h-[40%] flex justify-around items-center px-3">
                    <img src="/img/PTMS_LOGO.jpg" className="rounded-full" width={80} />

                    <div className="flex flex-col w-full items-center justify-center">
                        <h1 className="font-bold text-4xl">PTMS</h1>
                        <h1 className="font-bold text-md">Panabo City's Engineering Office</h1>
                    </div>
                
                    <img src="/img/ENGINEER_LOGO.png" width={80}/>
                </div>

                <button 
                    onClick={() => window.location.href = "/services/option"}
                    className="bg-orange-500 rounded-md p-5 w-[80%] text-white text-xl font-bold hover:opacity-75 mb-10">
                        APPLY
                </button>
            </div>

          
        </div>
    )
}

export default ApplyButtonPage