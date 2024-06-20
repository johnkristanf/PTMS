import { Link, useLocation } from "react-router-dom";
import { classNames } from "../helpers/classNames";
import { SignOut } from "../http/post/auth";
import { useQuery } from "@tanstack/react-query";
import { FetchLoginAccount } from "../http/get/auth";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export function SideBar({role}: {
  role: string
}){
    return(
        <div className="flex flex-col justify-around gap-3 p-8 items-center bg-orange-500 h-full w-[19%]">
          <Logo/>
          <NavLinks role={role} />

          <SignOutCompo />
            
        </div>
    )
}

function Logo(){
    return(
        <div className="flex items-center justify-center gap-2">
            <img src="/img/PTMS_LOGO.jpg" width={70} className="rounded-full" />
            <h1 className="font-bold text-black text-3xl">PTMS</h1>
        </div>
    )
}

function NavLinks({ role }: { role: string }) {

  type NavLinksTypes = {
    name: string,
    to: string,
    iconSrc: string
  }
  const location = useLocation();
  const navLinks: NavLinksTypes[] = [];


  if (role === "architectural") {
    navLinks.push({ name: "Applicants", to: "/architectural/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Approved", to: "/architectural/approved/applications", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/architectural/disapproved/applications", iconSrc: "/img/disapproved.png" });

    navLinks.push({ name: "Electrical", to: "/electrical/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Civil/Structural", to: "/civil/paid/applications", iconSrc: "/img/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/architectural/staff/accounts", iconSrc: "/img/staff_accounts.png" });
  }


  if (role === "civil") {
    navLinks.push({ name: "Applicants", to: "/civil/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Approved", to: "/civil/approved/applications", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/civil/disapproved/applications", iconSrc: "/img/disapproved.png" });

    navLinks.push({ name: "Architectural", to: "/architectural/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Electrical", to: "/electrical/paid/applications", iconSrc: "/img/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/civil/staff/accounts", iconSrc: "/img/staff_accounts.png" });
  }

  if (role === "electrical") {
    navLinks.push({ name: "Applicants", to: "/electrical/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Approved", to: "/electrical/approved/applications", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Disapproved", to: "/electrical/disapproved/applications", iconSrc: "/img/disapproved.png" });
    
    navLinks.push({ name: "Architectural", to: "/architectural/paid/applications", iconSrc: "/img/applicants.png" });
    navLinks.push({ name: "Civil/Structural", to: "/civil/paid/applications", iconSrc: "/img/applicants.png" });

    navLinks.push({ name: "Staff Accounts", to: "/electrical/staff/accounts", iconSrc: "/img/staff_accounts.png" });
  }

  if (role === "receiver") {
    navLinks.push({ name: "Pending", to: "/receiver/pending/applications", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Scanner", to: "/scanner/approved", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Releaser", to: "/releaser/application", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Edit Account", to: "/edit/receiver", iconSrc: "/img/edit_account.png" });
  }

  if (role === "scanner") {
    navLinks.push({ name: "Approved", to: "/scanner/approved", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Report", to: "/scanner/report", iconSrc: "/img/approved.png" });

    navLinks.push({ name: "Receiver", to: "/receiver/pending/applications", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Releaser", to: "/releaser/application", iconSrc: "/img/services_option.png" });
    
    navLinks.push({ name: "Edit Account", to: "/edit/scanner", iconSrc: "/img/edit_account.png" });
  }

  if (role === "releaser") {
    navLinks.push({ name: "Application", to: "/releaser/application", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Approved", to: "/releaser/approved", iconSrc: "/img/approved.png" });

    navLinks.push({ name: "Receiver", to: "/receiver/pending/applications", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Scanner", to: "/scanner/approved", iconSrc: "/img/services_option.png" });

    navLinks.push({ name: "Disapproved", to: "/releaser/disapproved", iconSrc: "/img/approved.png" });
    navLinks.push({ name: "Edit Account", to: "/edit/releaser", iconSrc: "/img/edit_account.png" });
  }


  if (role === "applicant") {
    navLinks.push({ name: "Services Options", to: "/services/option", iconSrc: "/img/services_option.png" });
    navLinks.push({ name: "Applied Services", to: "/applied/services", iconSrc: "/img/applied_services.png" });
    navLinks.push({ name: "Inbox", to: "/inbox", iconSrc: "/img/inbox.png" });
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
              activeLink === item.to ? "bg-gray-500 text-white" : "bg-white text-gray-600 hover:opacity-75"
            )}
          >

            <img src={item.iconSrc} width={20} className="mr-2" />
            {item.name}
           

          </Link>

      ))}
    </div>
  );
}

  

function SignOutCompo() {

  const { data: response, isLoading } = useQuery({
    queryKey: ["login_account"],
    queryFn: FetchLoginAccount,
  });

  const loginAccount = response?.data;

  if (isLoading) return <div className="text-white font-bold text-xl">Fetching Login Account...</div>;

  return (
    <div className="flex flex-col items-center gap-2 w-full">

      <div className="text-white font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
        {loginAccount.name}
      </div>

      <button
        onClick={() => SignOut()}
        className="bg-white text-gray-600 w-full rounded-md p-3 font-bold hover:opacity-75"
      >
        <FontAwesomeIcon icon={faSignOut}/> SIGN OUT
      </button>
      
    </div>
  );
}
