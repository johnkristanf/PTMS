import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { FetchLoginAccount } from "../../http/get/auth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

function StaffTypesPage() {
    const staffTypes = [
        { name: "RECEIVER", to: "/pending/applications" },
        { name: "SCANNER", to: "/scan" },
        { name: "RELEASER", to: "/release" },
    ];

    const { data: response } = useQuery({
        queryKey: ["login_staff"],
        queryFn: FetchLoginAccount,
    });

    const account = response?.data;

    console.log("account: ", account);

    const showAlert = (adminType: string) => {
        Swal.fire({
            title: "Would you like to request to access?",
            text: `Require an administrator request to access ${adminType.toLowerCase()} staff section`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) console.log("PASSED")
             
        });
    };

    const handleLinkClick = (itemName: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (account?.role !== itemName) {
            showAlert(itemName);
            event.preventDefault(); // Prevent default navigation behavior
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white">
            <div className="flex flex-col w-full items-center gap-5">
                <h1 className="text-black font-bold text-4xl">Select Staff Type</h1>
                <div className="flex w-[80%]">
                    {staffTypes.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            replace={true}
                            onClick={(event) => handleLinkClick(item.name, event)}
                            className={classNames("bg-orange-500 text-white p-5 font-bold hover:opacity-75 rounded-md mr-5 w-[40%] text-center")}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StaffTypesPage;
