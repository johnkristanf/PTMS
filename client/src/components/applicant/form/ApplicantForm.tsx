import { AppliedServices } from "../../../types/application";
import { classNames } from "../../../helpers/classNames";
import { generateScopeAndOccupancyOptions, groupByClass } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export function ApplicantInformationFormApplicant({ applicantInfo }: {
    applicantInfo: AppliedServices | undefined
}){

    const scopeOfWorkArray = applicantInfo?.scopeType.split(',');
    const characterOccupancyArray = applicantInfo?.characterOfOccupancy.split(',');

    const scopeOfWorkArraySafe = scopeOfWorkArray ?? [];
    const characterOccupancyArraySafe = characterOccupancyArray ?? [];

    console.log("scopeOfWorkArraySafe", scopeOfWorkArraySafe)
    console.log("characterOccupancyArraySafe", characterOccupancyArraySafe)


   
    const applicantOwnership = [
        { value: applicantInfo?.formOwnership, inputType: "text", ownerShipType: "Form Of Ownership"},
        { value: applicantInfo?.constructOwnbyEnterprise, inputType: "text", ownerShipType: "For Construction Owned By Enterprise"},
    ]
  
    const applicantNumber = [
        { value:  applicantInfo?.taxAccountNo,      inputType: "number", numberType: "Tax Account No."},
        { value:  applicantInfo?.telNo,             inputType: "number", numberType: "Telephone No."},
        {value:  applicantInfo?.tctNo,              inputType: "number", numberType: "TCT No."},
    
    ]


    const { scopeOptions, occupancyOptions } = generateScopeAndOccupancyOptions(applicantInfo?.permit_type || "")
    
    console.log("applicantInfo?.serviceType:", applicantInfo?.serviceType);
    console.log("scopeOptions:", scopeOptions);
    console.log("occupancyOptions:", occupancyOptions);

    const groupedScopeOptions = groupByClass(scopeOptions);
    const groupedOccupancyOptions = groupByClass(occupancyOptions);

    console.log("groupedScopeOptions:", groupedScopeOptions);
    console.log("groupedOccupancyOptions:", groupedOccupancyOptions);
    

   
    return(
        <div className="w-full rounded-md p-8">

            <form className="flex flex-col gap-3 w-full">

                <div className="flex items-center justify-between">

                    <div className="flex flex-col">
                        <label className="font-semibold">Applicant Code</label>
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700")}
                                value={applicantInfo?.applicationCode}
                                readOnly
                                disabled
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
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700 w-full")}
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
                                    className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700 w-full")}
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
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700 w-full")}
                            readOnly

                        />
                </div>

                <label className="font-semibold">Location for Construction/Installation</label>
                <div className="flex gap-2 flex-wrap">
                        <input 
                            type="text"
                            value={applicantInfo?.locationForConstruct_Install} 
                            className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700 w-full")}
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
                                    className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-blue-700 w-full")}
                                    readOnly
                                />
                            </div>
                            
                        ))
                    }
                </div>

                <Tabs defaultValue={applicantInfo?.permit_type} className="w-full">
                                
                                <TabsList className={classNames(
                                    applicantInfo?.serviceType == "Building" ? "mb-12": "mb-4",
                                    `flex flex-wrap gap-2 pb-[5rem] pt-[1rem]`
                                )}>
                                    {Object.keys(groupedScopeOptions).map((category) => {
                                        // At least one checkbox must be checked in Scope of Work
                                        const hasCheckedScope = groupedScopeOptions[category].some((item: string) => scopeOfWorkArraySafe.includes(item));
                                        
                                        // At least one checkbox must be checked in Character of Occupancy
                                        const hasCheckedOccupancy = groupedOccupancyOptions[category]?.some((item: string) => characterOccupancyArraySafe.includes(item)) || false;

                                        const excludedCategories = ["Electronics", "Fencing"]; // Categories that should not require Character of Occupancy

                                        const hasMissingSelections = !hasCheckedScope || (!excludedCategories.includes(category) && !hasCheckedOccupancy);

                                        return (
                                            <TabsTrigger 
                                                key={category} 
                                                value={category}
                                                className="bg-gray-200 min-w-fit px-4 py-2 rounded-md data-[state=active]:bg-gray-300 data-[state=active]:text-blue-700 data-[state=active]:font-bold flex items-center gap-1"
                                            >
                                                {category} {hasMissingSelections && <span className="text-red-600 font-bold">❗</span>}
                                            </TabsTrigger>
                                        );
                                    })}
                                </TabsList>

                                {Object.keys(groupedScopeOptions).map((category) => (
                                    <TabsContent key={category} value={category} className="space-y-4">

                                        {/* Scope of Work */}
                                        <div className="w-full border border-gray-300 p-3 rounded-md">
                                            <label className="font-semibold">Scope of Work</label>
                                            <div className="flex flex-col gap-2 mb-5">
                                                {groupedScopeOptions[category].map((item: string) => (
                                                    <div className="flex gap-1 items-center" key={item}>
                                                        <input 
                                                            type="checkbox" 
                                                            id={item}
                                                            value={item} 
                                                            checked={scopeOfWorkArraySafe.map(item => item.trim().toLowerCase()).includes(item.trim().toLowerCase())}
                                                            readOnly
                                                        />
                                                        <label htmlFor={item}>{item.replace(/^[^-]+-/, '')}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                        {/* Character of Occupancy */}
                                        {groupedOccupancyOptions[category] && groupedOccupancyOptions[category].length > 0 && (
                                            <div className="w-full border border-gray-300 p-3 rounded-md">
                                                <label className="font-semibold">Character of Occupancy</label>
                                                <div className="flex flex-col gap-2 mb-5">
                                                    {groupedOccupancyOptions[category].map((item: string) => (
                                                        <div className="flex gap-1 items-center" key={item}>
                                                            <input 
                                                                type="checkbox" 
                                                                id={item}
                                                                value={item} 
                                                                checked={characterOccupancyArraySafe.map(item => item.trim().toLowerCase()).includes(item.trim().toLowerCase())}
                                                                readOnly
                                                            />
                                                            <label htmlFor={item}>{item.replace(/^[^-]+-/, '')}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </TabsContent>
                                ))}
                            </Tabs>
            </form>

        </div>

    )
}


// const scopeOptions = [
//     "NEW CONSTRUCTION", "ERECTION", "ADDITION", "ALTERATION", "RENOVATION", 
//     "CONVERSION", "REPAIR", "MOVING", "RAISING", "ACCESSORY BUILDING STRUCTURE"
// ];

// const occupancyOptions = [
//     "GROUP A - RESIDENTIAL DWELLING", 
//     "GROUP B - RESIDENTIAL HOTEL APARTMENT", 
//     "GROUP C - EDUCATIONAL RECREATIONAL", 
//     "GROUP D - INSTITUTIONAL", 
//     "GROUP E - BUSINESS AND MERCANTILE", 
//     "GROUP F - INDUSTRIAL", 
//     "GROUP G - INDUSTRIAL STORAGE AND HAZARDOUS", 
//     "GROUP H - RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000", 
//     "GROUP I - RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE", 
//     "GROUP J - AGRICULTURAL ACCESSORY"
// ];


