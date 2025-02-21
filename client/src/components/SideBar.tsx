import { Link, useLocation } from "react-router-dom";
import { classNames } from "../helpers/classNames";
import { SignOut } from "../http/post/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchLoginAccount } from "../http/get/auth";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faEdit, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { LoginAccount } from "../types/auth";
import Swal from "sweetalert2";
import { RequestAccessRole } from "../http/post/access";
import { AccessRoleTypes } from "../types/access";
import { UploadProfilePicture } from "../http/post/document";
import { GetProfilePicture } from "../http/get/document";


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export function SideBar({role}: {
  role: string
}){
    return(

      <Sheet>
        <SheetTrigger className="fixed top-4 left-5 z-[9999]">
          
          <FontAwesomeIcon 
            icon={faBars} 
            className="text-4xl font-semibold text-white"
          />

        </SheetTrigger>

        <SheetContent side="left" className="z-[99999]">

          <div className="flex flex-col items-center gap-2 h-[90vh] w-full z-[9999] mt-4 overflow-y-auto custom-scrollbar">
            <img src="/img/ENGINEER_LOGO.png" alt="City Engineering Logo" width={90} className="mt-8" />

            <UserInfo />
            
            <NavLinks role={role} />

            <button
              onClick={() => SignOut()}
              className="bg-white text-gray-600 w-full  rounded-md p-3 font-bold hover:bg-orange-700 hover:text-white mt-4"
            >
              <FontAwesomeIcon icon={faSignOut}/> SIGN OUT
            </button> 

        </div>

        </SheetContent>
      </Sheet>

    )
}

// function Logo(){
//     return(
//         <div className="flex items-center justify-center gap-2">
//             <img src="/img/PTMS_LOGO.jpg" width={70} className="rounded-full" />
//             <h1 className="font-bold text-black text-3xl">PTMS</h1>
//         </div>
//     )
// }


function UserInfo() {

  const { data: loginAccountResponse, isLoading } = useQuery({
    queryKey: ["login_account"],
    queryFn: FetchLoginAccount,
  });

  const loginAccount: LoginAccount  = loginAccountResponse?.data;  

  console.log("loginAccount: ", loginAccount);
  


  const { data: profilePictureResponse } = useQuery({
    queryKey: ["profile_picture", loginAccount && loginAccount.id],
    queryFn: async () => {
      const data = await GetProfilePicture(loginAccount.id);
      return data;
    },

    enabled: loginAccount?.role !== "applicant" && !!loginAccount,
  });

  console.log("profilePictureResponse: ", profilePictureResponse);
  
 

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const uploadProfileMutation = useMutation({
    mutationFn: UploadProfilePicture,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profile_picture"] });

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile Uploaded Successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    },

    onMutate: () => {
        Swal.fire({
            title: 'Please wait...',
            text: 'Uploading your profile picture',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });
    },

    onError: (error: unknown) => {
        console.error("Document Upload Error:", error);
    },
});


  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("filename: ", file?.name);
    if (file) handleUploadProfileImage(file); 
  };

  const handleUploadProfileImage = async (file : File) => {

    try {
        const formData = new FormData();
        formData.append("userID", loginAccount.id.toString());
        formData.append("image", file);

        uploadProfileMutation.mutate(formData)
        
    } catch (error) {
        console.error("File upload failed", error);
        alert("File upload failed");
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };


  if (isLoading) return <div className="text-white font-bold text-xl">Fetching Login Account...</div>;

  return (
    <div className="flex flex-col items-center gap-2 w-full text-black mb-5">

      <div className="flex flex-col justify-center items-center my-3">
        
        <h1 className=" font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
          Welcome!
        </h1>

        <div className="flex items-center gap-2 mb-1 relative">

          {loginAccount.role !== "applicant" && (

            <FontAwesomeIcon 
              icon={faEdit} 
              className="absolute left-[-21px] top-[70%] -translate-y-1/2  rounded-full p-2 hover:cursor-pointer hover:opacity-75 "
              onClick={() => triggerFileInput()}
            />
          )}

          <div className="relative">

            {loginAccount.role === "applicant" ? (
              <img 
                src={
                  loginAccount.picture == "" || loginAccount.picture == "No_Profile"
                  ? "/img/icons/staff_picture.png" 
                  : loginAccount.picture
                } 
                className="rounded-full w-[60px] h-[60px] object-cover" 
              />
            ) : (

              <img 
                src={
                  profilePictureResponse?.data != "No_Profile"
                    ? profilePictureResponse?.data.profile_src 
                    : "/img/icons/staff_picture.png" 
                } 
                className="rounded-full w-[60px] h-[60px] object-cover" 
              />
            )}

          </div>

          <div className="font-bold text-xl w-full text-center">
            {loginAccount.name}
          </div>

        </div>


        <h1 className="font-bold text-orange-700">{loginAccount.role.toLocaleUpperCase()}</h1>

        <input
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleChangeProfile} 
        />

      </div>
      
    </div>
  );
}

function NavLinks({ role }: { role: string }) {

  type NavigationTypes = {
    name: string,
    to: string,
    iconSrc: string
  }

  type StaffSwitchRoleNavigation = {
    name: string,
    role: string,
    iconSrc: string
  }

  type AdminSwitchRoleNavigation = {
    name: string,
    admin_type: string,
    iconSrc: string
  }



  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navLinks: NavigationTypes[] = [];
  const admins: AdminSwitchRoleNavigation[] = [];
  const staffs: StaffSwitchRoleNavigation[] = [];

  // const [isAdminModalVisible, setIsAdminModalVisible] = useState(false); 
  const [toAccessRole, setToAccessRole] = useState<string>();
  // const toggleAdminModal = () => setIsAdminModalVisible((prevState) => !prevState);
  const queryClient = useQueryClient();

  const adminTypes = [
    "architectural",
    "civil",
    "electrical",
  ]

  const staffTypes = [
    "receiver",
    "scanner",
    "releaser",
  ]


  const mutation = useMutation({
    mutationFn: RequestAccessRole,
    onSuccess: () => {

        queryClient.invalidateQueries({queryKey: ['admin_access_request']})
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Access Request Sent Successfully",
          text: toAccessRole === "staff" ? "Please wait for the admins approval" : `Please wait for the ${role} admin approval`,
        });

    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
        console.error("Request Access error:", error);
    },
  });
  

  const handleRequestAccessRole = (role: string, user_id: number, access_role: string, isAdmin: boolean) => {
    // toggleAdminModal();
    const accessRole: AccessRoleTypes = {
      role,
      user_id, 
      access_role,
      isAdmin
    }

    console.log("role data: ", accessRole);
    

    mutation.mutate(accessRole)
  }


  const { data: response } = useQuery({
    queryKey: ["login_account"],
    queryFn: FetchLoginAccount,
  });

  const loginAccount: LoginAccount = response?.data; 

  console.log("role sa sidebar: ", role);
  


  // ----------------------------------ADMINS----------------------------------------
  if (role === "architectural") {
    navLinks.push({ name: "Dashboard", to: "/architectural/dashboard", iconSrc: "/img/icons/dashboard.png" });

    navLinks.push({ name: "Applicants", to: "/architectural/paid/applications", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Approved", to: "/architectural/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/architectural/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });
    navLinks.push({ name: "Trash", to: "/architectural/trash/applications", iconSrc: "/img/icons/trash.png" });

    admins.push({ name: "Electrical", admin_type: "electrical", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Civil/Structural", admin_type: "civil", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/architectural/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }


  if (role === "civil") {
    navLinks.push({ name: "Dashboard", to: "/civil/dashboard", iconSrc: "/img/icons/dashboard.png" });

    navLinks.push({ name: "Applicants", to: "/civil/paid/applications", iconSrc: "/img/icons/applicants.png" });
    navLinks.push({ name: "Approved", to: "/civil/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/civil/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });
    navLinks.push({ name: "Trash", to: "/civil/trash/applications", iconSrc: "/img/icons/trash.png" });

    admins.push({ name: "Architectural", admin_type: "architectural", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Electrical", admin_type: "electrical", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/civil/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }

  if (role === "electrical") {
    navLinks.push({ name: "Dashboard", to: "/electrical/dashboard", iconSrc: "/img/icons/dashboard.png" });

    navLinks.push({ name: "Applicants", to: "/electrical/paid/applications", iconSrc: "/img/icons/applicants.png" });
    navLinks.push({ name: "Approved", to: "/electrical/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/electrical/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });
    navLinks.push({ name: "Trash", to: "/electrical/trash/applications", iconSrc: "/img/icons/trash.png" });
    
    admins.push({ name: "Architectural", admin_type: "architectural", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Civil/Structural", admin_type: "civil", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/electrical/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }


  // ----------------------------------STAFFS----------------------------------------

  if (role === "receiver") {
    navLinks.push({ name: "Pending", to: "/receiver/pending/applications", iconSrc: "/img/icons/services_option.png" });
    navLinks.push({ name: "Trash", to: "/receiver/trash/applications", iconSrc: "/img/icons/trash.png" });

    staffs.push({ name: "Scanner", role: "SCANNER", iconSrc: "/img/icons/scanner_icon.png" });
    staffs.push({ name: "Releaser", role: "RELEASER", iconSrc: "/img/icons/releaser_icon.png" });
    
    navLinks.push({ name: "Edit Account", to: "/edit/receiver", iconSrc: "/img/icons/edit_account.png" });
  }

  if (role === "scanner") {
    navLinks.push({ name: "Approved", to: "/scanner/approved", iconSrc: "/img/icons/approved.png" });

    staffs.push({ name: "Receiver", role: "RECEIVER", iconSrc: "/img/icons/receiver_icon.png" });
    staffs.push({ name: "Releaser", role: "RELEASER", iconSrc: "/img/icons/releaser_icon.png" });
    
    navLinks.push({ name: "Edit Account", to: "/edit/scanner", iconSrc: "/img/icons/edit_account.png" });
  }

  if (role === "releaser") {
    // navLinks.push({ name: "Applications", to: "/releaser/application", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Approved", to: "/releaser/approved", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/releaser/disapproved", iconSrc: "/img/icons/disapproved.png" });
    navLinks.push({ name: "Report", to: "/releaser/report", iconSrc: "/img/icons/approved.png" });

    staffs.push({ name: "Receiver", role: "RECEIVER", iconSrc: "/img/icons/receiver_icon.png" });
    staffs.push({ name: "Scanner", role: "SCANNER", iconSrc: "/img/icons/scanner_icon.png" });

    navLinks.push({ name: "Edit Account", to: "/edit/releaser", iconSrc: "/img/icons/edit_account.png" });
  }


  // ----------------------------------APPLICANT----------------------------------------

  if (role === "applicant") {
    navLinks.push({ name: "Services Options", to: "/services/option", iconSrc: "/img/icons/services_option.png" });
    navLinks.push({ name: "Applied Services", to: "/applied/services", iconSrc: "/img/icons/applied_services.png" });
    navLinks.push({ name: "Notification", to: "/inbox", iconSrc: "/img/icons/inbox.png" });
  }

  const defaultLink = navLinks[0]?.to;
  const [activeLink, setActiveLink] = useState(location.pathname || defaultLink);



  useEffect(() => {
    if (!navLinks.find(link => link.to === location.pathname)) {
      setActiveLink(defaultLink);
    }
  }, [location.pathname, defaultLink, navLinks]);


  return (
    <div className="flex flex-col gap-8 text-white w-full">
      {navLinks.map((item) => (

          <Link
            key={item.name}
            to={item.to}
            replace={true}
            onClick={() => setActiveLink(item.to)}
            className={classNames(
              "font-bold text-lg p-2 rounded-md w-full text-center flex items-center gap-1",
              activeLink === item.to ? "bg-orange-700 text-white" : "text-gray-600 hover:bg-gray-500 hover:text-white"
            )}
          >

            <img src={item.iconSrc} width={20} className="mr-2" />
            {item.name}

          </Link>

      ))}

      {adminTypes.includes(role) && (
        
          <Collapsible>

            <CollapsibleTrigger className="relative flex items-center w-full text-lg p-2 rounded-md gap-2 text-gray-600 hover:bg-orange-700 hover:text-white">
              <img 
                src="/img/icons/staff_picture.png"             
                className="rounded-full" 
                width={20} 
                height={20} 
              />
              <button className="font-bold w-full text-start flex items-center gap-2">
                Access Admin
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>

            </CollapsibleTrigger>
            
            <CollapsibleContent className="bg-orange-700 text-white mt-3 p-2 rounded-md w-full">
              {admins.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveLink(item.admin_type);
                    handleRequestAccessRole(loginAccount.adminType || "", loginAccount.id, item.admin_type, true)
                    setToAccessRole(item.admin_type)
                  }}
                  className={classNames(
                    "font-bold text-lg p-2 rounded-md w-full text-center flex items-center justify-center gap-1 hover:text-black"
                  )}
                  >
                  {item.name}
                </button>
              ))}
            </CollapsibleContent>

          </Collapsible>
        )}


      {staffTypes.includes(role) && (
        
          <Collapsible>

            <CollapsibleTrigger className="relative flex items-center w-full text-lg p-2 rounded-md gap-2 text-gray-600 hover:bg-orange-700 hover:text-white">
              <img 
                src="/img/icons/staff_picture.png"             
                className="rounded-full" 
                width={20} 
                height={20} 
              />
              <button className="font-bold w-full text-start flex items-center gap-2">
                Access Staff
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>

            </CollapsibleTrigger>
            
            <CollapsibleContent className="bg-orange-700 text-white mt-3 p-2 rounded-md w-full">
              {staffs.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveLink(item.role);
                    handleRequestAccessRole(loginAccount.role || "", loginAccount.id, item.role, false)
                    setToAccessRole("staff")
                  }}
                  className={classNames(
                    "font-bold text-lg p-2 rounded-md w-full text-center flex items-center justify-center gap-1 hover:text-black"
                  )}
                  >
                  {item.name}
                </button>
              ))}
            </CollapsibleContent>

          </Collapsible>
        )}

      
    </div>
  );
}

  
