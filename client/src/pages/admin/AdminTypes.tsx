import { Link } from "react-router-dom"
import { classNames } from "../../helpers/classNames"
import { FetchLoginAccount } from "../../http/get/auth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

function AdminTypesPage(){
    const adminTypes = [
        {name: "Architectural", to: "/admin/paid/applications", adminType: "architectural"},
        {name: "Civil/Structural", to: "/admin/paid/applications", adminType: "civil"},
        {name: "Electrical", to: "/admin/paid/applications", adminType: "electrical"},
    ]


    const { data: response } = useQuery({
        queryKey: ["login_admin"],
        queryFn: FetchLoginAccount,
    });

    const account = response?.data;

    console.log("account: ", account);

    const showAlert = (adminType: string) => {
        Swal.fire({
            title: `Do you want to access ${adminType} module`,
            text: `Require an ${adminType} admin request to access ${adminType.toLowerCase()} admin section`,
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

    const handleLinkClick = (adminType: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (account?.adminType !== adminType) {
            showAlert(adminType);
            event.preventDefault(); 
        }
    };

    return(
        <div className="w-full h-screen flex justify-center items-center bg-white">

          <div className="flex flex-col w-full items-center gap-5">
            <h1 className="font-bold text-4xl">Select Admin Type</h1>

          
            <div className="flex w-[80%]">
                { adminTypes.map((item) => (
                        
                    <Link
                        key={item.name}  
                        to={item.to}
                        replace={true}
                        onClick={(event) => handleLinkClick(item.adminType, event)}
                        className={classNames("bg-orange-500 text-white p-5 font-bold hover:opacity-75 rounded-md mr-5 w-[40%] text-center")}
                    >
                        
                        {item.name}
                        
                    </Link>
                ))}
            </div>

          </div>
          
        </div>  
    )
}

export default AdminTypesPage