import { LoginRoles } from '../components/Landing'
import '../assets/index.css'

function LandingPage(){
    return(
        <div className='w-full h-screen flex items-center justify-around'>

        <div className="flex flex-col">

            <div className='flex items-center gap-2'>
                <img src="/img/PTMS_LOGO.jpg" alt="company_logo" width={180} className='rounded-full' />

                <div>
                    <h1 className='text-white font-bold text-6xl'>PTMS</h1>
                    <p className='text-white font-bold text-xl'>Panabo City Engineer's Office Transaction Management System <br /> for Issuance of Permits Application Services.</p>
                </div>
            </div>


        </div>

        { <LoginRoles /> }

    </div>
    )
}

export default LandingPage