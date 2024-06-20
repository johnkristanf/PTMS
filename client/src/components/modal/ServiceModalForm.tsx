import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { classNames } from "../../helpers/classNames";
import { ApplicantInfo, Application } from "../../types/application";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FetchLoginApplicant } from "../../http/get/auth";
import { useQuery } from "@tanstack/react-query";
import { Apply } from "../../http/post/application";
import Swal from "sweetalert2";
import '../../assets/scrollStyle.css';

export const ServiceModalForm = ({ selectedService, setServiceModalOpen }: {
    selectedService: string,
    setServiceModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const { register, handleSubmit, reset } = useForm<ApplicantInfo>({
        defaultValues: {
            municipality: "Panabo City Davao Del Norte",
            zipCode: "8105"
        }
    });
    const [serviceType, setServiceType] = useState<string>("");
    const [scopeTypes, setScopeTypes] = useState<string[]>([]);
    const [occupancyTypes, setOccupancyTypes] = useState<string[]>([]);

    const { data: response } = useQuery({
        queryKey: ["login_applicant"],
        queryFn: FetchLoginApplicant,
    });

    const login_applicant: { user_id: number, email: string } = response?.data;

    const onSubmit: SubmitHandler<ApplicantInfo> = (data) => {
        console.log("data submit form", data);

        Swal.fire({
            text: "Are you sure you want to submit this Information?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff981a",
            cancelButtonColor: "#000000",
            confirmButtonText: "Submit"
        }).then((result) => {
            if (result.isConfirmed) {

                const applyData: Application = {
                    application_id: 0,
                    applicationCode: "",
                    serviceType: serviceType,
                    
                    firstname: data.firstName,
                    middleInitial: data.middleInitial,
                    lastName: data.lastName,
                    
                    addressNo: data.addressNo,
                    barangay: data.barangay,
                    street: data.street,
                    municipality: data.municipality,
                    zipCode: data.zipCode,
                    locationForConstruct_Install: data.locationForConstruct_Install,
        
                    formOwnership: data.formOwnership,
                    constructOwnbyEnterprise: data.constructOwnbyEnterprise,
        
                    taxAccountNo: data.taxAccountNo,
                    telNo: data.telNo,
                    tctNo: data.tctNo,
                    permit_type: selectedService,
                    email: login_applicant.email,
                    user_id: login_applicant.user_id,
                    assessment_status: "",
                    
                    scopeType: scopeTypes.join(','),
                    characterOfOccupancy: occupancyTypes.join(','),
                };
        
                Apply(applyData).catch(err => console.error(err));
        
                Swal.fire({
                    icon: "success",
                    title: "Permit Applied Successfully",
                    text: "See the Applied Services for Application Instruction",
                    showConfirmButton: true,
                    confirmButtonColor: "#ff981a",

                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/applied/services";
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

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex fixed top-0 justify-center items-center w-full p-2">

                <div className="w-1/2 bg-white rounded-md p-8 overflow-y-auto max-h-[90vh] custom-scrollbar">

                    <div className="flex justify-between items-center mb-5">

                        <div className="flex-col flex">
                            <h1 className="text-black font-semibold text-xl mb-2">{selectedService} Permit</h1>
                            <h1 className="text-black font-bold text-3xl">Application Form</h1>
                        </div>

                        <FontAwesomeIcon 
                            icon={faX} 
                            onClick={() => setServiceModalOpen(false)}
                            className="text-xl hover:opacity-75 hover:cursor-pointer font-bold"
                        />
                    
                    </div>

                    <div className="flex justify-center w-full gap-5 font-semibold mb-5">

                        <div className="flex gap-1">
                            <input 
                                type="radio" 
                                name="serviceType" 
                                value="NEW" 
                                checked={serviceType === "NEW"} 
                                onChange={(e) => setServiceType(e.target.value)}
                            />
                            <label>NEW</label>
                        </div>

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

                        

                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">

                        <label className="font-semibold">Enter Name</label>
                        <div className="flex gap-2">
                            {
                                applicantName.map((data) => (
                                    <input 
                                        key={data.registerName}
                                        type={data.inputType} 
                                        placeholder={data.placeHolder} 
                                        required
                                        className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800 w-full")}
                                        {...register(data.registerName as keyof ApplicantInfo)}
                                    />
                                ))
                            }
                        </div>

                        <label className="font-semibold">Enter Ownership</label>
                        <div className="flex gap-5">
                            <select 
                                className="bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800"
                                {...register("formOwnership")}
                            >
                                <option value="" disabled selected>Form of Ownership</option>
                                <option value="Joint Tenancy">Joint Tenancy</option>
                                <option value="Tenancy in Common">Tenancy in Common</option>
                                <option value="Tenants by Entirety">Tenants by Entirety</option>
                                <option value="Sole Ownership">Sole Ownership</option>
                                <option value="Community Property">Community Property</option>
                            </select>
                            {
                                applicantOwnership.map((data) => (
                                    <input 
                                        key={data.registerName}
                                        type={data.inputType} 
                                        placeholder={data.placeHolder} 
                                        required
                                        className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800 w-full")}
                                        {...register(data.registerName as keyof ApplicantInfo)}
                                    />
                                ))
                            }
                        </div>

                        <label className="font-semibold">Enter Address</label>
                        <div className="flex gap-2 flex-wrap">
                            {
                                applicantAddress.map((data) => (
                                    <input 
                                        key={data.registerName}
                                        type={data.inputType} 
                                        placeholder={data.placeHolder} 
                                        defaultValue={data.value}
                                        disabled={data.disabled}
                                        required
                                        className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800 w-[40%]")}
                                        {...register(data.registerName as keyof ApplicantInfo)}
                                    />
                                ))
                            }
                            <select 
                                className="bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800 w-[40%]"
                                {...register("barangay")}
                                required
                            >
                                <option value="" disabled selected>Select Barangay</option>
                                {barangayOptions.map((barangay) => (
                                    <option key={barangay} value={barangay}>{barangay}</option>
                                ))}
                            </select>
                        </div>

                        <label className="font-semibold">Enter Numbers</label>
                        <div className="flex gap-2">
                            {
                                applicantNumber.map((data) => (
                                    <input 
                                        key={data.registerName}
                                        type={data.inputType} 
                                        placeholder={data.placeHolder}
                                        required
                                        className={classNames("bg-gray-400 placeholder-black font-semibold rounded-md p-2 focus:outline-slate-800 w-full")}
                                        {...register(data.registerName as keyof ApplicantInfo)}
                                    />
                                ))
                            }
                        </div>

                        <label className="font-semibold">Scope of Work</label>
                        <div className="flex flex-col gap-2 mb-5">
                            {
                                scopeOptions.map((scope) => (
                                    <div className="flex gap-1 items-center" key={scope}>
                                        <input 
                                            type="checkbox" 
                                            name="scopeType" 
                                            value={scope} 
                                            checked={scopeTypes.includes(scope)} 
                                            onChange={handleScopeChange}
                                        />
                                        <label>{scope}</label>
                                    </div>
                                ))
                            }
                        </div>

                        <label className="font-semibold">Character of Occupancy</label>
                        <div className="flex flex-col gap-2 mb-5 ">
                            {
                                occupancyOptions.map((occupancy) => (
                                    <div className="flex gap-1 items-center" key={occupancy}>
                                        <input 
                                            type="checkbox" 
                                            name="occupancyType" 
                                            value={occupancy} 
                                            checked={occupancyTypes.includes(occupancy)} 
                                            onChange={handleOccupancyChange}
                                        />
                                        <label>{occupancy}</label>
                                    </div>
                                ))
                            }
                        </div>

                        <button 
                            type="submit" 
                            className="bg-orange-500 rounded-md p-2 mt-3 text-white w-full font-semibold hover:opacity-75"
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
    { registerName: "lastName", placeHolder: "Last Name", inputType: "text" },
    { registerName: "firstName", placeHolder: "First Name", inputType: "text" },
    { registerName: "middleInitial", placeHolder: "Middle Initial", inputType: "text" }
];

const applicantOwnership = [
    { registerName: "constructOwnbyEnterprise", placeHolder: "Construction Owned By Enterprise", inputType: "text" },
];

const applicantAddress = [
    { registerName: "street", placeHolder: "Street", inputType: "text" },
    { registerName: "municipality", placeHolder: "City/Municipality", inputType: "text", value: "Panabo City Davao Del Norte", disabled: true },
    { registerName: "zipCode", placeHolder: "Zip Code", inputType: "number", value: "8105", disabled: true },
    { registerName: "locationForConstruct_Install", placeHolder: "Location of Construction/Installation", inputType: "text" },
];

const applicantNumber = [
    { registerName: "taxAccountNo", placeHolder: "Tax Account No.", inputType: "number" },
    { registerName: "telNo", placeHolder: "Cell/Tel No.", inputType: "number" },
    { registerName: "tctNo", placeHolder: "TCT No.", inputType: "number" },
];

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

const barangayOptions = [
    "A. O. Floirendo", 
    "Buenavista",

    "Cacao", 
    "Cagangohan", 
    "Consolacion",

    "Dapco",
    "Datu Addul Dadia",

    "Gredu(POB.)",
    "J.P. Laurel",

    "Kasilak",
    "Katipunan",
    "Katualan",
    "Kauswagan",
    "Kiotoy",

    "Little Panay",
    "Lower Panaga (Roxas)",

    "Mabunao",
    "Maduao",
    "Malativas",
    "Manay",
    "Nanyo",
    "New Malaga (Dalisay)",
    "New Malitbog",
    "New Pandan (POB.)",
    "New Visayas",

    "Quezon",

    "Salvacion",
    "San Francisco (POB.)",
    "San Nicolas",
    "San Pedro",
    "San Roque",
    "San Vicente",
    "Santa Cruz",
    "Santo Nino (POB.)",
    "Santo Nino (POB.)",
    "Sindaton",
    "Southern Davao",

    "Tagpore",
    "Tibungol",

    "Upper Licanan",

    "Waterfall",







];

export default ServiceModalForm;
