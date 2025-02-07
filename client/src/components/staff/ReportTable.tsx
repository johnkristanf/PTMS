import { ApplicationFileModal } from "../modal/staff/ApplicationFilesModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchReportApplication } from "../../http/get/application";
import { ReportApplication } from "../../types/application";
import { classNames } from "../../helpers/classNames";

interface ApproveTableProps {
    searchTerm: string,
    selectedMonth: string,
}

export function ReportTable({ searchTerm, selectedMonth }: ApproveTableProps) {

    const [openFile, setOpenFile] = useState<boolean>(false);
    const [selectedApplicationCode, setSelectedApplicationCode] = useState<string>(); 

    const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, application_code: string) => {
        if ((e.target as HTMLElement).tagName !== "BUTTON" && (e.target as HTMLElement).tagName !== "INPUT") {
            setOpenFile(true);
            setSelectedApplicationCode(application_code)
        }
    };


    const { data: response } = useQuery({
        queryKey: ["report_applications", searchTerm, selectedMonth], 
        queryFn: async () => {
            return await FetchReportApplication(searchTerm, selectedMonth)
        },
    });

    const reportApplications: ReportApplication[] = response?.data || [];

    return (
        <>
            { openFile && <ApplicationFileModal setOpenFile={setOpenFile} selectedApplicationCode={selectedApplicationCode} />}

            <div className="flex flex-col bg-blue-100 w-full h-[70%] rounded-md ">
                <div>
                    <div className="inline-block min-w-full py-2 ">
                        <div className="overflow-hidden overflow-y-auto h-[400px] p-5 custom-scrollbar">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium border-neutral-500">
                                    <tr>
                                        <th scope="col" className=" py-4">Application Code</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Address</th>
                                        <th scope="col" className="px-6 py-4">Permit Type</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">Release Date</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportApplications.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="text-center py-4 text-gray-900 text-xl font-semibold pt-5">
                                                No application available
                                            </td>
                                        </tr>
                                    ) : (
                                        reportApplications.map((item) => (
                                        <tr
                                            key={item.application_id}
                                            onClick={(e) => handleRowClick(e, item.applicationCode)}
                                            className={`border-b border-neutral-500 transition duration-300 ease-in-out cursor-pointer`}
                                        >
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">{item.applicationCode}</td>
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">
                                            {item.firstname} {item.middleInitial} {item.lastName}
                                            </td>
                                            <td className="whitespace-normal px-3 py-2 break-words">
                                            {item.addressNo} {item.barangay} {item.street} {item.municipality} {item.zipCode}
                                            </td>
                                            <td className="whitespace-nowrap pl-6 py-4">{item.permit_type}</td>
                                            <td className={classNames(
                                                "whitespace-nowrap pl-6 py-4 font-bold",
                                                item.application_status === "Disapproved" ? "text-red-800" : "text-green-700",
                                            )}>
                                                {item.application_status}
                                            </td>
                                            <td className="whitespace-nowrap pl-6 py-4">{item.release_date}</td>

                                        </tr>
                                        ))
                                    )}
                                    </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
