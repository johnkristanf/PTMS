
function UnauthorizedPage(){
    return(
        <section className=" dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div>
                    <p className="text-2xl font-medium text-orange-500 dark:text-blue-400">401 error</p>
                    <h1 className="mt-3 text-4xl font-semibold text-white dark:text-white md:text-4xl">You are Unauthorized to Access this Page</h1>
                    <p className="mt-4 text-white dark:text-gray-400 text-xl">Sorry, the page you are looking for is unavailable.</p>

                    <div className="flex items-center mt-6 gap-x-3">

                        <button onClick={() => window.location.href = "/"} className="w-1/2 px-5 py-2 font-bold tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            GO BACK HOME
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnauthorizedPage