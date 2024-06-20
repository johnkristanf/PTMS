import { AppliedServices } from "../../../types/application";
import { classNames } from "../../../helpers/classNames";



export function ApplicantInformationFormApplicant({ applicantInfo }: {
    applicantInfo: AppliedServices | undefined
}){

    const scopeOfWorkArray = applicantInfo?.scopeType.split(',');
    const characterOccupancyArray = applicantInfo?.characterOfOccupancy.split(',');

    console.log("scopeOfWorkArray", scopeOfWorkArray)
    console.log("characterOccupancyArray", characterOccupancyArray)


   
    const applicantOwnership = [
        { value: applicantInfo?.formOwnership, inputType: "text", ownerShipType: "Form Of Ownership"},
        { value: applicantInfo?.constructOwnbyEnterprise, inputType: "text", ownerShipType: "For Construction Owned By Enterprise"},
    ]
  
    const applicantNumber = [
        { value:  applicantInfo?.taxAccountNo,      inputType: "number", numberType: "Tax Account No."},
        { value:  applicantInfo?.telNo,             inputType: "number", numberType: "Telephone No."},
        {value:  applicantInfo?.tctNo,              inputType: "number", numberType: "TCT No."},
    
    ]


   
    return(
        <div className="w-full rounded-md p-8">

            <form className="flex flex-col gap-3 w-full">

                <div className="flex items-center justify-between">

                    <div className="flex flex-col">
                        <label className="font-semibold">Applicant Code</label>
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500")}
                                value={applicantInfo?.applicationCode}
                                readOnly
                                />
                        </div>
                    </div>

                    <div className="flex flex-col w-1/4">
                        <h1 className="font-semibold text-xl text-center">Status</h1>

                        <h1 className="bg-gray-400 p-2 rounded-md text-lg font-semibold w-full text-center">
                            
                            <span className={`${applicantInfo?.status === 'Pending' ? 'text-black' : applicantInfo?.status === 'Disapproved' ? 'text-red-800' : ''}`}>
                                {applicantInfo?.status}
                            </span>
                        </h1>
                    </div>
                    
                    
                </div>
                
               


                <label className="font-semibold">Applicant Name</label>
                <div className="flex gap-2">
                        <input 
                            type="text"
                            value={`${applicantInfo?.firstname} ${applicantInfo?.middleInitial} ${applicantInfo?.lastName}`} 
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full")}
                            readOnly

                        />
                </div>


                <div className="flex gap-5">
                    {
                        applicantOwnership.map((data) => (

                            <div className="flex flex-col justify-center" key={data.ownerShipType}>
                                <label className="font-semibold"> {data.ownerShipType}</label>

                                <input 
                                    type={data.inputType} 
                                    value={data.value} 
                                    className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full")}
                                    readOnly

                                />
                            </div>
                            
                        ))
                    }
                </div>


                <label className="font-semibold">Applicant Address</label>
                <div className="flex gap-2 flex-wrap">
                        <input 
                            type="text"
                            value={`${applicantInfo?.addressNo} ${applicantInfo?.barangay} ${applicantInfo?.street} ${applicantInfo?.municipality} ${applicantInfo?.zipCode}`} 
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full")}
                            readOnly

                        />
                </div>

                <label className="font-semibold">Location for Construction/Installation</label>
                <div className="flex gap-2 flex-wrap">
                        <input 
                            type="text"
                            value={applicantInfo?.locationForConstruct_Install} 
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full")}
                            readOnly

                        />
                </div>


                <div className="flex gap-2 mt-3">
                    {
                        applicantNumber.map((data) => (

                            <div className="flex flex-col justify-center" key={data.numberType}>
                                <label className="font-semibold"> {data.numberType}</label>

                                <input 
                                    type={data.inputType} 
                                    value={data.value} 
                                    className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-orange-500 w-full")}
                                    readOnly
                                />
                            </div>
                            
                        ))
                    }
                </div>

                        <label className="font-semibold">Scope of Work</label>
                        <div className="flex flex-col gap-2  mb-5">
                            {scopeOptions.map((scope) => (
                                <div className="flex gap-1 items-center" key={scope}>
                                    <input 
                                        type="checkbox" 
                                        name="scopeType" 
                                        value={scope} 
                                        checked={scopeOfWorkArray?.includes(scope)} 
                                        readOnly  
                                    />
                                    <label>{scope}</label>
                                </div>
                            ))}
                        </div>

                        <label className="font-semibold">Character of Occupancy</label>
                        <div className="flex flex-col gap-2 mb-5 ">
                            {occupancyOptions.map((occupancy) => (
                                <div className="flex gap-1 items-center" key={occupancy}>
                                    <input 
                                        type="checkbox" 
                                        name="occupancyType" 
                                        value={occupancy} 
                                        checked={characterOccupancyArray?.includes(occupancy)}  
                                        readOnly  
                                    />
                                    <label>{occupancy}</label>
                                </div>
                            ))}
                        </div>
            </form>

        </div>

    )
}


const scopeOptions = [
    "NEW CONSTRUCTION", "ERECTION", "ADDITION", "ALTERATION", "RENOVATION", 
    "CONVERSION", "REPAIR", "MOVING", "RAISING", "ACCESSORY BUILDING STRUCTURE"
];

const occupancyOptions = [
    "GROUP A - RESIDENTIAL DWELLING", 
    "GROUP B - RESIDENTIAL HOTEL APARTMENT", 
    "GROUP C - EDUCATIONAL RECREATIONAL", 
    "GROUP D - INSTITUTIONAL", 
    "GROUP E - BUSINESS AND MERCANTILE", 
    "GROUP F - INDUSTRIAL", 
    "GROUP G - INDUSTRIAL STORAGE AND HAZARDOUS", 
    "GROUP H - RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000", 
    "GROUP I - RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE", 
    "GROUP J - AGRICULTURAL ACCESSORY"
];


