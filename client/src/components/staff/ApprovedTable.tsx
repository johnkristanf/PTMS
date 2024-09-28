import { useState } from "react";
import { ReleaseDateModal } from "../modal/staff/ReleaseModal";
import { ApplicationFileModal } from "../modal/staff/ApplicationFilesModal";

interface ApproveTableProps {
    staffRole: string;
    ScannerReport?: boolean;
}

export function ApproveTable({ staffRole, ScannerReport }: ApproveTableProps) {
    const [openReleaseModal, setOpenReleaseModal] = useState<boolean>(false);
    const [openFile, setOpenFile] = useState<boolean>(false);

    const handleRowClick = () => {
        setOpenFile(true);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            {openReleaseModal && <ReleaseDateModal setOpenReleaseModal={setOpenReleaseModal} />}
            {openFile && <ApplicationFileModal setOpenFile={setOpenFile} />}
            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md">
                <div>
                    <div className="inline-block min-w-full py-2 ">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Application Code</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Address</th>
                                        <th scope="col" className="px-6 py-4">Permit Type</th>
                                        {staffRole === 'releaser' && (
                                            <th scope="col" className="px-6 py-4">Release Date</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        onClick={handleRowClick}
                                        className={`border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-600 cursor-pointer`}
                                    >
                                        <td className="whitespace-nowrap pl-6 py-4 font-medium">12345678</td>
                                        <td className="whitespace-nowrap pl-6 py-4 font-medium">Nicole Pacaldo</td>
                                        <td className="whitespace-nowrap pl-6 py-4">Purok 4 Cabili Salvacion 8105</td>
                                        <td className="whitespace-nowrap pl-6 py-4">Building</td>
                                        {staffRole === 'releaser' && (
                                            <td className="whitespace-nowrap pl-6 py-4">N/A</td>
                                        )}
                                        {staffRole === 'scanner' && !ScannerReport && (
                                            <td className="whitespace-nowrap py-4">
                                                <div className="flex gap-3">
                                                    <button 
                                                        onClick={(e) => {
                                                            handleButtonClick(e);
                                                            console.log("Upload clicked");
                                                        }} 
                                                        className="bg-orange-500 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                    >
                                                        Upload
                                                    </button>
                                                    <button 
                                                        onClick={(e) => {
                                                            handleButtonClick(e);
                                                            console.log("Submit clicked");
                                                        }} 
                                                        className="bg-green-600 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                        {staffRole === 'releaser' && (
                                            <td className="whitespace-nowrap py-4">
                                                <button
                                                    onClick={(e) => {
                                                        handleButtonClick(e);
                                                        setOpenReleaseModal(true);
                                                    }}
                                                    className="bg-orange-500 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                >
                                                    Release
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
