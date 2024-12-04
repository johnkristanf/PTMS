import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PTMSHeader } from "../../../components/PtmsHeader";

import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import { useFetchStaffPendingAR } from "../../../hook/useFetchStaffPendingAR";
import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";


import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import { FetchApplicationsByBarangay, FetchApplicationsByPermitType, FetchApplicationsByYear } from "../../../http/get/application";
import { ApplicationByBarangay, ApplicationByPermitType, ApplicationByYear } from "../../../types/application";


function ArchitecturalDashboardPage() {

    const [openStaffAccessModal, setOpenStaffAccessModal] = useState<boolean>(false);
    const [openAdminAccessModal, setOpenAdminAccessModal] = useState<boolean>(false);
   
    const toggleStaffAccessModal = () => {
        setOpenStaffAccessModal((prevState) => {
            if (!prevState) setOpenAdminAccessModal(false);
            return !prevState;
        });
    };

    const toggleAdminAccessModal = () => {
        setOpenAdminAccessModal((prevState) => {
            if (!prevState) setOpenStaffAccessModal(false); 
            return !prevState;
        });
    };

    const { pendingAccessReqest } = useFetchStaffPendingAR();
    

    return (

        <>
            { openStaffAccessModal && (<StaffRequestAccessModal />) }
            { openAdminAccessModal && (<AdminRequestAccessModal />) }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"architectural"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-[80%] h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5 font-semibold">
                        <div className="flex justify-between">
                            <h1 className="text-orange-400 text-4xl font-bold">Dashboard</h1>
                            <div className="flex items-center gap-3">

                                <div className="flex gap-1">
                                    {pendingAccessReqest && pendingAccessReqest.length > 0 && (
                                        <div className="flex items-center justify-center text-white bg-red-500 rounded-full w-4 h-4 text-sm">
                                            {pendingAccessReqest.length}
                                        </div>
                                    )}

                                    <button 
                                        className="text-2xl hover:opacity-75 hover:cursor-pointer text-sm bg-gray-500 text-white rounded-md p-2"
                                        onClick={toggleStaffAccessModal}
                                    >
                                        Staff AR 
                                    </button>
                                </div>

                                

                                <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal} />


                                
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 gap-24 ml-5">
                            <ApplicationPerYearChart />
                            <ApplicationPerPermitTypeChart />
                        </div>

                        <div className="w-full flex justify-end">
                            <ApplicationPerBarangay />

                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}



function ApplicationPerYearChart(){

    const { data: response } = useQuery({
        queryKey: ["applications_by_year"],
        queryFn: async () => {
            const data = await FetchApplicationsByYear();
            return data;
        },

    });

    console.log("response: ", response)

    const applications: ApplicationByYear[] = response?.data ?? [];

    const data = [
        ["Year", "Applications"],
    ];

    applications.forEach((item) => {
        const totalApplications = item.total_application ?? 0;
        data.push([item.year, totalApplications.toLocaleString()]);
    });
      
    const options = {
        chart: {
          title: "Total Applications Per Year",
        },

       colors: [
            "#f97316", // Orange (bg-orange-400)
        ],
    };

    return (
        <Chart
            chartType="Bar"
            data={data}
            options={options}
            width={"100%"}
            height={"300px"}
        />
    );
}


function ApplicationPerPermitTypeChart(){

    const { data: response } = useQuery({
        queryKey: ["applications_by_permitType"],
        queryFn: async () => {
            const data = await FetchApplicationsByPermitType();
            return data;
        },

    });

    console.log("response: ", response)

    const applications: ApplicationByPermitType[] = response?.data ?? [];

    const data = [
        ["PermitType", "Applications"],
    ];

    applications.forEach((item) => {
        const totalApplications = item.total_application ?? 0;
        data.push([item.permit_type, totalApplications.toLocaleString()]);
    });
      
    const options = {
        chart: {
          title: "Total Applications Per Permit Type",
        },

       colors: [
            "#f97316", // Orange (bg-orange-400)
            "#4B4B4B", // Darker Gray
        ],
    };

    return (
        <Chart
            chartType="Bar"
            data={data}
            options={options}
            width={"100%"}
            height={"300px"}
        />
    );
}


function ApplicationPerBarangay() {
    const { data: response } = useQuery({
        queryKey: ["applications_by_barangay"],
        queryFn: async () => {
            const data = await FetchApplicationsByBarangay();
            return data;
        },
    });

    console.log("response barangay: ", response); // Logs the entire response from the query

    const applications: ApplicationByBarangay[] = response?.data ?? [];
    console.log("applications data: ", applications); // Logs the processed applications array

    
    const data: [string, string | number][] = [
        ["Barangay", "Applications"],
    ];

    applications.forEach((item) => {
        const totalApplications = item.total_application ?? 0;

        data.push([item.barangay, totalApplications]);
    });

    console.log("data for chart: ", data); 
    const options = {
        title: "Total Applications Per Barangay",
       colors: [
            "#f97316", // Orange (bg-orange-400)
            "#4B4B4B", // Darker Gray
        ],
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"350px"}
        />
    );
}


export default ArchitecturalDashboardPage;
