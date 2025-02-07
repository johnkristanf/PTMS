import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import { FetchApplicationsByBarangay, FetchApplicationsByPermitType, FetchApplicationsByYear } from "../../http/get/application";
import { ApplicationByBarangay, ApplicationByPermitType, ApplicationByYear } from "../../types/application";

export function ApplicationPerYearChart(){

    const { data: response } = useQuery({
        queryKey: ["applications_by_year"],
        queryFn: async () => {
            const data = await FetchApplicationsByYear();
            return data;
        },

    });

    console.log("response: ", response)

    const applications: ApplicationByYear[] = response?.data ?? [];

    const data: [string, string | number][] = [
        ["Year", "Applications"],
    ];

    applications.forEach((item) => {
        const totalApplications = item.total_application ?? 0;
        data.push([item.year, totalApplications]);
    });
      
    const options = {
        colors: ['#4CAF50'],
        legend: {
            position: 'none',
        },
    };

    return (
        <div className="w-full flex flex-col">
            <h1 className="mb-12">Total Approved Permits Per Year</h1>
            <Chart
                chartType="Bar"
                data={data}
                options={options}
                width={"100%"}
                height={"250px"}
            />
        </div>
    );
}



export function ApplicationPerPermitTypeChart() {
    const { data: response } = useQuery({
        queryKey: ["applications_by_permitType"],
        queryFn: async () => {
            const data = await FetchApplicationsByPermitType();
            return data;
        },
    });

    console.log("response: ", response);

    const applications: ApplicationByPermitType[] = response?.data ?? [];

    const data: [string, string | number, { role: "style" } | string ][] = [
        ["PermitType", "Applications", { role: "style" }],
    ];

    const colorPalette = [
        "#FFEB3B", // Yellow
        "#FF9800", // Orange
        "#4CAF50", // Green
        "#F44336", // Red
        "#2196F3", // Blue
        "#9C27B0", // Purple
        "#3F51B5", // Indigo
        "#00BCD4", // Cyan
        "#8BC34A", // Light Green
    ];

    applications.forEach((item, index) => {
        const totalApplications = item.total_application ?? 0;
        data.push([item.permit_type, totalApplications, colorPalette[index % colorPalette.length]]);
    });


    const options = {
        legend: 'none',
    };

    return (

        <div className="w-full flex flex-col">
            <h1>Total Applications Per Permit Type</h1>
            <Chart
                chartType="ColumnChart"
                data={data}
                options={options}
                width={"100%"}
                height={"300px"}
            />
        </div>
       
    );
}



export function ApplicationPerBarangay() {
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
