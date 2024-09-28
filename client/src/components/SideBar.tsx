import { Link, useLocation } from "react-router-dom";
import { classNames } from "../helpers/classNames";
import { SignOut } from "../http/post/auth";
import { useQuery } from "@tanstack/react-query";
import { FetchLoginAccount } from "../http/get/auth";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { LoginAccount } from "../types/auth";

export function SideBar({role}: {
  role: string
}){
    return(
        <div className="flex flex-col items-center gap-2 p-8 items-center bg-gray-200 h-full w-[19%] z-[9999]">
          <img src="/img/ENGINEER_LOGO.png" alt="City Engineering Logo" width={90} />

          <UserInfo />
          
          <NavLinks role={role} />

          <button
            onClick={() => SignOut()}
            className="bg-white text-gray-600 w-48 rounded-md p-3 font-bold hover:bg-gray-500 hover:text-white mt-4"
          >
            <FontAwesomeIcon icon={faSignOut}/> SIGN OUT
          </button> 

            
        </div>
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

  const { data: response, isLoading } = useQuery({
    queryKey: ["login_account"],
    queryFn: FetchLoginAccount,
  });

  const loginAccount: LoginAccount = response?.data;

  if (isLoading) return <div className="text-white font-bold text-xl">Fetching Login Account...</div>;

  return (
    <div className="flex flex-col items-center gap-2 w-full text-black mb-5">

      <div className="flex flex-col justify-center items-center my-3">
        
        <h1 className=" font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
          Welcome!
        </h1>

        <div className="flex items-center gap-2 mb-1">
          <img 
            src={
              
              loginAccount.picture == "" 
              ? "/img/icons/staff_picture.png" 
              : loginAccount.picture
            } 
            
            className="rounded-full" 
            width={40} 
            height={20} 
          />

          <div className=" font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
            {loginAccount.name}
          </div>

        </div>

        <h1 className="font-bold text-orange-400">{loginAccount.role.toLocaleUpperCase()}</h1>


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


  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navLinks: NavigationTypes[] = [];
  const admins: NavigationTypes[] = [];
  const staffs: NavigationTypes[] = [];

  const [isAdminModalVisible, setIsAdminModalVisible] = useState(false); 
  const toggleAdminModal = () => setIsAdminModalVisible((prevState) => !prevState);

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


  // ----------------------------------ADMINS----------------------------------------
  if (role === "architectural") {
    navLinks.push({ name: "Applicants", to: "/architectural/paid/applications", iconSrc: "/img/icons/applicants.png" });
    navLinks.push({ name: "Approved", to: "/architectural/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/architectural/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });

    admins.push({ name: "Electrical", to: "/electrical/paid/applications", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Civil/Structural", to: "/civil/paid/applications", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/architectural/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }


  if (role === "civil") {
    navLinks.push({ name: "Applicants", to: "/civil/paid/applications", iconSrc: "/img/icons/applicants.png" });
    navLinks.push({ name: "Approved", to: "/civil/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/civil/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });

    admins.push({ name: "Architectural", to: "/architectural/paid/applications", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Electrical", to: "/electrical/paid/applications", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/civil/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }

  if (role === "electrical") {
    navLinks.push({ name: "Applicants", to: "/electrical/paid/applications", iconSrc: "/img/icons/applicants.png" });
    navLinks.push({ name: "Approved", to: "/electrical/approved/applications", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/electrical/disapproved/applications", iconSrc: "/img/icons/disapproved.png" });
    
    admins.push({ name: "Architectural", to: "/architectural/paid/applications", iconSrc: "/img/icons/applicants.png" });
    admins.push({ name: "Civil/Structural", to: "/civil/paid/applications", iconSrc: "/img/icons/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/electrical/staff/accounts", iconSrc: "/img/icons/staff_accounts.png" });
  }


  // ----------------------------------STAFFS----------------------------------------

  if (role === "receiver") {
    navLinks.push({ name: "Pending", to: "/receiver/pending/applications", iconSrc: "/img/icons/services_option.png" });
    navLinks.push({ name: "Retired", to: "/receiver/retired/applications", iconSrc: "/img/icons/services_option.png" });

    staffs.push({ name: "Scanner", to: "/scanner/approved", iconSrc: "/img/icons/scanner_icon.png" });
    staffs.push({ name: "Releaser", to: "/releaser/application", iconSrc: "/img/icons/releaser_icon.png" });
    
    navLinks.push({ name: "Edit Account", to: "/edit/receiver", iconSrc: "/img/icons/edit_account.png" });
  }

  if (role === "scanner") {
    navLinks.push({ name: "Approved", to: "/scanner/approved", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Report", to: "/scanner/report", iconSrc: "/img/icons/approved.png" });

    staffs.push({ name: "Receiver", to: "/receiver/pending/applications", iconSrc: "/img/icons/receiver_icon.png" });
    staffs.push({ name: "Releaser", to: "/releaser/application", iconSrc: "/img/icons/releaser_icon.png" });
    
    navLinks.push({ name: "Edit Account", to: "/edit/scanner", iconSrc: "/img/icons/edit_account.png" });
  }

  if (role === "releaser") {
    navLinks.push({ name: "Applications", to: "/releaser/application", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Approved", to: "/releaser/approved", iconSrc: "/img/icons/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/releaser/disapproved", iconSrc: "/img/icons/approved.png" });

    staffs.push({ name: "Receiver", to: "/receiver/pending/applications", iconSrc: "/img/icons/receiver_icon.png" });
    staffs.push({ name: "Scanner", to: "/scanner/approved", iconSrc: "/img/icons/scanner_icon.png" });

    navLinks.push({ name: "Edit Account", to: "/edit/releaser", iconSrc: "/img/icons/edit_account.png" });
  }


  // ----------------------------------APPLICANT----------------------------------------

  if (role === "applicant") {
    navLinks.push({ name: "Services Options", to: "/services/option", iconSrc: "/img/icons/services_option.png" });
    navLinks.push({ name: "Applied Services", to: "/applied/services", iconSrc: "/img/icons/applied_services.png" });
    navLinks.push({ name: "Inbox", to: "/inbox", iconSrc: "/img/icons/inbox.png" });
  }

  const defaultLink = navLinks[0]?.to;
  const [activeLink, setActiveLink] = useState(location.pathname || defaultLink);



  useEffect(() => {
    if (!navLinks.find(link => link.to === location.pathname)) {
      setActiveLink(defaultLink);
    }
  }, [location.pathname, defaultLink, navLinks]);


  return (
    <div className="flex flex-col items-center gap-8 text-white w-full">
      {navLinks.map((item) => (

          <Link
            key={item.name}
            to={item.to}
            replace={true}
            onClick={() => setActiveLink(item.to)}
            className={classNames(
              "font-bold text-lg p-2 rounded-md w-full text-center flex items-center justify-center gap-1",
              activeLink === item.to ? "bg-orange-400 text-white" : "text-gray-600 hover:bg-gray-500 hover:text-white"
            )}
          >

            <img src={item.iconSrc} width={20} className="mr-2" />
            {item.name}

          </Link>

      ))}

      {adminTypes.includes(role) && (

          <div 
            onClick={toggleAdminModal}
            className="relative flex items-center justify-center text-lg p-2 rounded-md gap-2 text-gray-600 hover:bg-gray-500 hover:text-white"
          >
            <img 
              src="/img/icons/staff_picture.png"             
              className="rounded-full" 
              width={20} 
              height={20} 
            />

            <button
              className="font-bold w-full text-center"
            >
              Switch Admin
            </button>

            <FontAwesomeIcon icon={faChevronRight} className="text-black"/>

            {isAdminModalVisible && (
                <div className="absolute right-[-200px] top-[-20px] bg-gray-400 text-white p-2 rounded-md w-[180px] h-[100px] shadow-lg">
                  {admins.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      replace={true}
                      onClick={() => {
                        setActiveLink(item.to);
                        toggleAdminModal(); 
                      }}
                      className={classNames(
                        "font-bold text-lg p-2 rounded-md w-full text-center flex items-center justify-center gap-1 hover:text-black"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
            )}
          </div>
      )}


      {staffTypes.includes(role) && (
        
          <div 
            onClick={toggleAdminModal}
            className="relative flex items-center justify-center gap-3 text-lg p-2 rounded-md text-gray-600 hover:bg-gray-500 hover:text-white"
          >
            <img 
              src="/img/icons/staff_picture.png"             
              className="rounded-full" 
              width={20} 
              height={20} 
            />

            <button
              className="font-bold w-full text-center"
            >
              Switch Staff
            </button>

            <FontAwesomeIcon icon={faChevronRight} className="text-black"/>

            {isAdminModalVisible && (
                <div className="absolute right-[-200px] top-[-20px] bg-gray-400 text-white p-2 rounded-md w-[180px] h-[100px] shadow-lg">
                  
                  {staffs.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      replace={true}
                      onClick={() => {
                        setActiveLink(item.to);
                        toggleAdminModal(); 
                      }}
                      className={classNames(
                        "font-bold text-lg p-2 rounded-md w-full text-center flex items-center justify-center gap-1 hover:text-black"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
            )}
          </div>
      )}

      
    </div>
  );
}

  
