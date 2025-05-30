import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { classNames } from "../../helpers/classNames";
import { ApplicantInfo, Application } from "../../types/application";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faX } from "@fortawesome/free-solid-svg-icons";
import { FetchLoginApplicant } from "../../http/get/auth";
import { useQuery } from "@tanstack/react-query";
import { Apply } from "../../http/post/application";
import Swal from "sweetalert2";
import '../../assets/scrollStyle.css';
import { IsApplicationExists } from '../../http/get/application';

import { generateScopeAndOccupancyOptions, groupByClass } from '@/lib/utils';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { capitalizeFirstLetter } from '@/helpers/capitalize';


export const ServiceModalForm = ({ selectedService, setServiceModalOpen, role }: {
    selectedService: string,
    setServiceModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    role: string
}) => {

    const { register, handleSubmit, reset } = useForm<ApplicantInfo>({
        // defaultValues: {
        //     municipality: "Panabo City Davao Del Norte",
        //     zipCode: "8105"
        // }
    });

    // const [value, setValue] = useState('');


    const [serviceType, setServiceType] = useState<string>("RENEWAL");
    
    const [scopeTypes, setScopeTypes] = useState<string[]>([]);
    const [occupancyTypes, setOccupancyTypes] = useState<string[]>([]);
    // const [isFormValid, setIsFormValid] = useState<boolean>(false); 

    // const watchFields = watch();
    
    // useEffect(() => {
    //     const requiredFieldsFilled = Object.entries(watchFields)
    //     .filter(([key]) => key !== "constructOwnbyEnterprise") 
    //     .every(([, field]) => field !== "");

    //     if (selectedService === "Signed" || selectedService === "Demolition") {
    //         setIsFormValid(requiredFieldsFilled); // Only validate required fields
    //     } else if (selectedService === "Fencing" || selectedService === "Electronics") {
    //         // Exempt Fencing and Electronics from occupancy validation
    //         setIsFormValid(requiredFieldsFilled && scopeTypes.length > 0);
    //     } else {
    //         // Normal validation for other services
    //         const scopesSelected = scopeTypes.length > 0;
    //         const occupancySelected = occupancyTypes.length > 0;
    
    //         if (requiredFieldsFilled && scopesSelected && occupancySelected) {
    //             setIsFormValid(true);
    //         } else {
    //             setIsFormValid(false);
    //         }
    //     }

       
    // }, [watchFields, scopeTypes, occupancyTypes, selectedService]);

    const { data: response } = useQuery({
        queryKey: ["login_applicant"],
        queryFn: FetchLoginApplicant,
    });

    const login_applicant: { user_id: number, email: string } = response?.data;
    console.log("login_applicant: ", login_applicant);
    

    const onSubmit: SubmitHandler<ApplicantInfo> = (data) => {
       
        //------------------- INPUT VALIDATION ---------------

        // const missingFields: string[] = [];
        // clearErrors();

        // Object.entries(data).forEach(([key, value]) => {
        //     if (value === "" || value === undefined) {
        //         missingFields.push(key);
        //         setError(key as keyof ApplicantInfo, { type: "manual", message: "This field is required" });
        //     }
        // });

        // THIS COMMENTED CODE IS FOR SCOPE AND OCCUPANCY VALIDATION (REMOVAL)

        // if (selectedService !== "Signed" && selectedService !== "Demolition") {
        //     if (scopeTypes.length === 0) {
        //         missingFields.push("Scope of Work");
        //         setError("scopeTypes" as keyof ApplicantInfo, { type: "manual", message: "Select at least one scope" });
        //     }
        //     if (selectedService !== "Fencing" && selectedService !== "Electronics" && occupancyTypes.length === 0) {
        //         missingFields.push("Character of Occupancy");
        //         setError("occupancyTypes" as keyof ApplicantInfo, { type: "manual", message: "Select at least one occupancy type" });
        //     }
        // }

        // if (missingFields.length > 0) return;

        // const hasMissingSelections = Object.keys(groupedScopeOptions).some(category => 
        //     !(groupedScopeOptions[category].some((item: string) => scopeTypes.includes(item)) && 
        //       (groupedOccupancyOptions[category]?.some((item: string) => occupancyTypes.includes(item)) || false))
        // );
    
        // if (hasMissingSelections) {
        //     Swal.fire({
        //         icon: "info",
        //         title: "Incomplete Selection",
        //         text: "Please check at least one option in both Scope of Work and Character of Occupancy before submitting.",
        //         confirmButtonColor: "#3085d6",
        //         confirmButtonText: "Okay",
        //     });

        //     return;
        // }

        //------------------- END OF INPUT VALIDATION ---------------

        IsApplicationExists(data.firstName, data.lastName, selectedService).
            then(res => {
                if(res == 'application_exists'){
                    Swal.fire({
                        title: "Application Exists!",
                        text: "Kindly please apply for new permit or continue your old application",
                        icon: "warning",
                    })

                    return;
                }
            }).
            catch(err => console.error("error in checking application exists: ", err))

        // BLUE SUBMIT BUTTON AND RED CANCEL
        Swal.fire({
            text: "Are you sure you want to submit this Information?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#c2410c",
            cancelButtonColor: "#8b0000",
            confirmButtonText: "Submit"
        }).then((result) => {
            if (result.isConfirmed) {

                const applyData: Application = {
                    application_id: 0,
                    applicationCode: "",
                    serviceType: serviceType,
                    
                    firstname: capitalizeFirstLetter(data.firstName),
                    middleInitial: capitalizeFirstLetter(data.middleInitial),
                    lastName: capitalizeFirstLetter(data.lastName),
                    
                    addressNo: data.addressNo,
                    barangay: data.barangay,
                    street: capitalizeFirstLetter(data.street),
                    municipality: data.municipality,
                    zipCode: data.zipCode,
                    locationForConstruct_Install: capitalizeFirstLetter(data.locationForConstruct_Install),
        
                    formOwnership: data.formOwnership,
                    constructOwnbyEnterprise: data.constructOwnbyEnterprise,
        
                    taxAccountNo: data.taxAccountNo,
                    telNo: data.telNo,
                    tctNo: data.tctNo,
                    permit_type: selectedService,

                    // CATCHER IF THE INPUT IS WALK IN
                    email: !login_applicant?.email ? 'walk_in@gmail.com': login_applicant.email,
                    user_id: !login_applicant?.user_id ? -1 : login_applicant.user_id,
                    
                    assessment_status: "",
                    
                    scopeType: scopeTypes.join(','),
                    characterOfOccupancy: occupancyTypes.join(','),
                };



                // console.log("scopeTypes: ", scopeTypes);
                // console.log("occupancyTypes: ", occupancyTypes);
                // return;
        
                Apply(applyData).catch(err => console.error(err));


                Swal.fire({
                    icon: "info",
                    title: "Application Note",
                    text: "Please secure copies of requirements and permits to be submitted to City's Engineering Office. Completion and occupancy cannot be access once your application is disapproved",
                    showConfirmButton: true,
                    confirmButtonColor: "#c2410c",

                }).then((result) => {

                    if(result.isConfirmed || result.isDismissed || result.isDenied) {

                        Swal.fire({
                            icon: "success",
                            title: "Permit Applied Successfully",
                            text: "See the Applied Services for Application Instruction",
                            showConfirmButton: true,
                            confirmButtonColor: "#c2410c",
        
                        }).then((result) => {
                            if (result.isConfirmed) {
                                let location;
        
                                if(role == 'receiver'){
                                    location = '/receiver/pending/applications';
                                } else {
                                    location = "/applied/services";
                                }
                                
                                window.location.href = location;
                            }
                        });

                    }

                });
        
                
            }
        });
        
        reset();
    };

    const handleScopeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setScopeTypes(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const handleOccupancyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setOccupancyTypes(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };



    const applicantNumber = [
        { label: "Tax Account No.", registerName: "taxAccountNo", placeHolder: "(optional)", inputType: "number",},
        { label: "Cell/Tel No.", registerName: "telNo",  inputType: "tel", maxLength: 11}, 
        { label: "TCT No.", registerName: "tctNo", placeHolder: "(optional)", inputType: "number",},
    ];

    const excludedForScopeOccupancy = ["Signed", "Demolition"];

    const { scopeOptions, occupancyOptions } = generateScopeAndOccupancyOptions(selectedService)

    const groupedScopeOptions = groupByClass(scopeOptions);
    const groupedOccupancyOptions = groupByClass(occupancyOptions);

    console.log("scopeTypes: ", scopeTypes);
    console.log("occupancyTypes: ", occupancyTypes);

    console.log("groupedScopeOptions: ", groupedScopeOptions);
    console.log("groupedOccupancyOptions: ", groupedOccupancyOptions);
    
    


    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex fixed top-20 justify-center items-center w-full p-2">

                <div className="w-1/2 bg-white rounded-md p-8 overflow-y-auto max-h-[80vh] custom-scrollbar">

                    <div className="flex justify-between items-center mb-5">

                        <div className="flex-col flex">
                            <h1 className='font-bold text-xl text-gray-600 mb-5'>Step 2:</h1>

                            <h1 className="text-black font-bold text-3xl">Application Form</h1>
                            <h1 className="text-black font-semibold text-md my-2">{selectedService} Permit</h1>

                        </div>

                        <FontAwesomeIcon 
                            icon={faX} 
                            onClick={() => setServiceModalOpen(false)}
                            className="text-xl hover:opacity-75 hover:cursor-pointer font-bold"
                        />
                    
                    </div>

                    <div className="flex justify-center w-full gap-5  mb-5">

                        {
                            selectedService == "Electrical" && (
                                <div className="flex gap-1">
                                    <input 
                                        type="radio" 
                                        name="serviceType" 
                                        value="RENEWAL" 
                                        checked={serviceType === "RENEWAL"} 
                                        onChange={(e) => setServiceType(e.target.value)}
                                    />
                                    <label>RENEWAL</label>
                                </div>
                            )
                        }

                        

                        

                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">

                        <div className="w-full border border-gray-300 p-3 rounded-md">
                            {/* <label className="font-semibold">Enter Name</label> */}
                            <div className="flex gap-2">
                                {
                                    applicantName.map((data) => (
                                        <div className='flex flex-col '>
                                            <label>{data.placeHolder}</label>
                                            <input 
                                                key={data.registerName}
                                                type={data.inputType} 
                                                className={classNames("capitalize placeholder-black rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full")}
                                                {...register(data.registerName as keyof ApplicantInfo)}
                                            />

                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}
                                        </div>
                                        
                                    ))
                                }
                            </div>
                        </div>

                        
                        <div className="w-full border border-gray-300 p-3 rounded-md">

                            {/* <label className="">Enter Ownership</label> */}
                            <div className="flex gap-5">
                                {
                                    applicantOwnership.map((data) => (
                                        <div className='flex flex-col  w-full'>
                                            <label>{data.placeHolder}</label>
                                            <input 
                                                key={data.registerName}
                                                type={data.inputType} 
                                                className={classNames("capitalize placeholder-black  rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full")}
                                                {...register(data.registerName as keyof ApplicantInfo)}
                                            />

                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}

                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        <div className="w-full border border-gray-300 p-3 rounded-md">

                            {/* <label className="">Enter Address</label> */}
                            <div className="flex flex-col gap-5 ">

                            {applicantAddress.map((data) => (
                                <div key={data.registerName} className="flex flex-col w-full">
                                    {/* Render Municipality first */}
                                    {data.registerName === "municipality" && (
                                        <>
                                            <label>{data.placeHolder}</label>

                                            <input 
                                                type={data.inputType} 
                                                disabled={data.disabled}
                                                className={classNames(`capitalize placeholder-black  rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full`)}
                                                {...register(data.registerName as keyof ApplicantInfo)}
                                            />
                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}

                                            {/* Insert Barangay Select Right After Municipality */}
                                            <label className='mt-3'>Barangay</label>

                                            {/* <select 
                                                className=" placeholder-black rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full"
                                                {...register("baranagay")}
                                            >
                                                <option disabled selected>Select Barangay</option>
                                                {barangayOptions.map((barangay, index) => (
                                                    <option key={index} value={barangay}>{barangay}</option>
                                                ))}
                                            </select> */}

                                                <input 
                                                    type='text' 
                                                    className={classNames("capitalize placeholder-black  rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full")}
                                                    {...register("barangay")}
                                                />

                                            {/* {errors["barangay" as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors["barangay" as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}
                                        </>
                                    )}

                                    {/* Render Other Fields Normally */}
                                    {data.registerName !== "municipality" && (
                                        <>
                                            <label>{data.placeHolder}</label>
                                            <input 
                                                type={data.inputType} 
                                                disabled={data.disabled}
                                                className={classNames(`capitalize placeholder-black  rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full`)}
                                                {...register(data.registerName as keyof ApplicantInfo)}
                                            />
                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        </div>


                        


                        <div className="w-full border border-gray-300 p-3 rounded-md">

                            {/* <label className="">Enter Address</label> */}
                            <div className="flex flex-col gap-5 ">

                            {location.map((data) => (
                                <div key={data.registerName} className="flex flex-col w-full">

                                            <label>{data.placeHolder}</label>
                                            <input 
                                                type={data.inputType} 
                                                className={classNames(`capitalize placeholder-black  rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full`)}
                                                {...register(data.registerName as keyof ApplicantInfo)}
                                            />
                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}
                                </div>
                            ))}
                        </div>

                        </div>

                        <div className="w-full border border-gray-300 p-3 rounded-md">
                            {/* <label className="">Enter Numbers</label> */}


                            {/* THE OPTIONAL PLACEHOLDER IS BLURRY */}
                            <div className="flex gap-2">
                                {
                                    applicantNumber.map((data) => (
                                        
                                        <div className='flex flex-col  w-full'>

                                            <div className="flex items-center gap-2">
                                                <label>{data.label}</label>
                                                
                                                {
                                                    data.label == "TCT No." && (
                                                        <HoverCard>
                                                            <HoverCardTrigger>
                                                                <FontAwesomeIcon icon={faCircleInfo} className='hover:cursor-pointer'/>
                                                            </HoverCardTrigger>
                                                            
                                                            <HoverCardContent>
                                                                <h1 
                                                                    className='mt-5 text-gray-600 text-sm font-semibold'
                                                                >
                                                                    TCT No. (Transfer Certificate of Title Number) is a unique land title number proving property ownership. 
                                                                </h1>
                                                            </HoverCardContent>
                                                        </HoverCard>

                                                    )
                                                }

                                            </div>

                                            <input 
                                                key={data.registerName}
                                                type={data.inputType} 
                                                maxLength={data.maxLength}
                                                placeholder={data.placeHolder}
                                                className={classNames("capitalize placeholder-black placeholder-gray-600 opacity-70 rounded-md p-2 border border-black focus:border-orange-700 focus:outline-none w-full")}
                                                {...register(
                                                    data.registerName as keyof ApplicantInfo,
                                                    // data.label !== "Tax Account No." && data.label !== "TCT No."
                                                    //     ? { required: `${data.label} is required` }
                                                    //     : {} // Exclude validation
                                                )}
                                            />

                                            {/* {errors[data.registerName as keyof ApplicantInfo] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors[data.registerName as keyof ApplicantInfo]?.message}
                                                </p>
                                            )} */}

                                        </div>


                                    ))

                                }

                            </div>

                            

                        </div>

                        {
                            !excludedForScopeOccupancy.includes(selectedService) && (
                                <Tabs defaultValue={selectedService} className="w-full">
                                
                                    <TabsList className={classNames(
                                        selectedService == "Building" ? "mb-12": "mb-4",
                                        `flex flex-wrap gap-2 pb-12`
                                    )}>
                                        {Object.keys(groupedScopeOptions).map((category) => {

                                            // KANING GI COMMENT MAO NING MO DYNAMIC OG ADD EXCLAMATION IF KULANG 

                                            // At least one checkbox must be checked in Scope of Work
                                            // const hasCheckedScope = groupedScopeOptions[category].some((item: string) => scopeTypes.includes(item));
                                            
                                            // At least one checkbox must be checked in Character of Occupancy
                                            // const hasCheckedOccupancy = groupedOccupancyOptions[category]?.some((item: string) => occupancyTypes.includes(item)) || false;

                                            // const excludedCategories = ["Electronics", "Fencing"]; // Categories that should not require Character of Occupancy

                                            // const hasMissingSelections = !hasCheckedScope || (!excludedCategories.includes(category) && !hasCheckedOccupancy);

                                            return (
                                                <TabsTrigger 
                                                    key={category} 
                                                    value={category}
                                                    className="bg-gray-200 min-w-fit px-4 py-2 rounded-md data-[state=active]:bg-gray-300 data-[state=active]:text-orange-600 data-[state=active]:font-bold flex items-center gap-1"
                                                >
                                                    {category}

                                                    {/* {hasMissingSelections && <span className="text-red-600 font-bold">❗</span>} */}
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
                                                                checked={scopeTypes.includes(item)} 
                                                                onChange={handleScopeChange}
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
                                                                    checked={occupancyTypes.includes(item)} 
                                                                    onChange={handleOccupancyChange}
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
                            )
                        }



                        {/* BEFORE SUBMISSION PUT RED WARNING EACH INPUT NEAR TABS EACH CHECKBOXES IF NOT YET COMPLETED */}

                        <button
                            type="submit"
                            className={classNames(
                                "rounded-md p-2 mt-3 text-white w-full font-semibold",
                                "bg-orange-700 hover:opacity-75" 
                            )}
                        >
                            SUBMIT
                        </button>

                    </form>

                </div>

            </div>
        </>
    )


    
}

const applicantName = [
    { registerName: "firstName", placeHolder: "First Name", inputType: "text" },
    { registerName: "middleInitial", placeHolder: "Middle Initial", inputType: "text" },
    { registerName: "lastName", placeHolder: "Last Name", inputType: "text" }

];

const applicantOwnership = [
    { registerName: "constructOwnbyEnterprise", placeHolder: "Construction Owned By Enterprise (optional)", inputType: "text" },
];

const applicantAddress = [
    { registerName: "municipality", placeHolder: "City/Municipality", inputType: "text", disabled: false },
    { registerName: "street", placeHolder: "Street", inputType: "text" },
    { registerName: "zipCode", placeHolder: "Zip Code", inputType: "number", disabled: false },
];


const location = [
    { registerName: "locationForConstruct_Install", placeHolder: "Location of Construction/Installation", inputType: "text" },

]



// const barangayOptions = [
//     "A. O. Floirendo", 
//     "Buenavista",

//     "Cacao", 
//     "Cagangohan", 
//     "Consolacion",

//     "Dapco",
//     "Datu Addul Dadia",

//     "Gredu(POB.)",
//     "J.P. Laurel",

//     "Kasilak",
//     "Katipunan",
//     "Katualan",
//     "Kauswagan",
//     "Kiotoy",

//     "Little Panay",
//     "Lower Panaga (Roxas)",

//     "Mabunao",
//     "Maduao",
//     "Malativas",
//     "Manay",
//     "Nanyo",
//     "New Malaga (Dalisay)",
//     "New Malitbog",
//     "New Pandan (POB.)",
//     "New Visayas",

//     "Quezon",

//     "Salvacion",
//     "San Francisco (POB.)",
//     "San Nicolas",
//     "San Pedro",
//     "San Roque",
//     "San Vicente",
//     "Santa Cruz",
//     "Santo Nino (POB.)",
//     "Santo Nino (POB.)",
//     "Sindaton",
//     "Southern Davao",

//     "Tagpore",
//     "Tibungol",

//     "Upper Licanan",

//     "Waterfall",
// ];

export default ServiceModalForm;
