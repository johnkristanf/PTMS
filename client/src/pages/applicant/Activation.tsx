

function ActivationPage() {

    return (
        <div className="w-full h-screen flex justify-center items-center font-semibold">
            <div className="flex flex-col items-center bg-white w-[40%] rounded-md p-8" >
                <h1 className="text-center text-3xl">Account Activation Success</h1>
                <p className="text-gray-600 text-sm">You may now procced on logging in your login</p>

                <button 
                    onClick={() => window.location.href = "/"}
                    className="w-[80%] bg-orange-700 p-3 rounded-md text-white mt-5 hover:opacity-75"
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
}

export default ActivationPage;
