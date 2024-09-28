import { SideBar } from '../../components/SideBar';
import { classNames } from '../../helpers/classNames';
import '../../assets/scrollStyle.css';
import { FetchLoginApplicant } from '../../http/get/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { FetchInboxes } from '../../http/get/inbox';

import InboxModal from '../../components/modal/applicant/InboxModal';
import { Inboxes } from '../../types/inbox';
import { UpdateInboxStatus } from '../../http/put/inbox';

type FilterType = 'all' | 'latest' | 'unread';

const filterBtn = [
    { name: "All", filterType: "all" },
    { name: "Latest", filterType: "latest" },
    { name: "Unread", filterType: "unread" },
];

const filterText: Record<FilterType, string> = {
    all: "All Inboxes",
    latest: "Latest Inboxes",
    unread: "Unread Inboxes"
};

function InboxPage() {

    const [selectedFilter, setSelectedFilter] = useState<FilterType>(filterBtn[0].filterType as FilterType);
    const [openInbox, setOpenInbox] = useState<boolean>(false);
    const [inboxInfo, setInboxInfo] = useState<Inboxes>()
    const queryClient = useQueryClient();
    
    const { data: res, isLoading: isLoadingApplicant } = useQuery({
        queryKey: ["login_applicant"],
        queryFn: FetchLoginApplicant,
    });

    const login_applicant = res?.data;
    const user_id = login_applicant?.user_id;

    const { data: resp, isLoading: isLoadingInboxes } = useQuery({
        queryKey: ["inboxes", user_id, selectedFilter],
        queryFn: async () => {
            const data = await FetchInboxes(user_id, selectedFilter);
            return data;
        },
        enabled: !!user_id,
    });

    const mutation = useMutation({
        mutationFn: UpdateInboxStatus, 
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["inboxes", user_id, selectedFilter]
            });
              
        },
    });

    const inboxes: Inboxes[] = resp?.data ?? [];

    const openInboxModal = (inboxInfo: Inboxes) => {
        console.log("update dol")
        mutation.mutate(inboxInfo.inbox_id)
        setInboxInfo(inboxInfo)
        setOpenInbox(true)
    }
    
    if (isLoadingApplicant || isLoadingInboxes) {
        return <div className="text-white font-bold text-xl">Loading...</div>;
    }

    console.log("inbox: ", inboxes)

    return (
        <div className='flex justify-between items-center h-screen w-full bg-white'>
            <SideBar role='applicant' />

            {
                inboxInfo && openInbox && <InboxModal setOpenInbox={setOpenInbox} inboxInfo={inboxInfo} />
            }

            <div className="flex-col flex items-center w-[60%] h-full rounded-md p-8 mr-36">  

                <div className="flex flex-col justify-center items-center gap-5 w-full mt-5 overflow-hidden">
                    <h1 className='text-center font-bold text-4xl mb-2'>{filterText[selectedFilter]}</h1>

                    <div className="flex justify-center items-center gap-3 w-full">
                        
                        <h1 className='font-bold text-md'>Filter</h1>
                        {
                            filterBtn.map((item) => (
                                <button
                                    onClick={() => setSelectedFilter(item.filterType as FilterType)}
                                    className={classNames(
                                        "rounded-md p-2 text-white font-bold w-[15%] hover:opacity-75",
                                        selectedFilter === item.filterType ? "bg-gray-500" : "bg-orange-400"
                                    )}
                                    key={item.name}
                                >
                                    {item.name}
                                </button>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-4 overflow-y-auto h-full w-full custom-scrollbar">
                        {
                            inboxes.length > 0 ? (

                                inboxes.map((item, index) => (
                                    
                                    <div onClick={() => openInboxModal(item)} key={index} className="bg-gray-300 rounded-md w-full flex items-center gap-5 p-4 space-x-4 hover:opacity-75 hover:cursor-pointer">
                                        <h1 className={`flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${item.status === 'read' ? 'font-sm' : 'font-bold'}`}>
                                            {item.message}
                                        </h1>

                                        {
                                            item.status == 'unread' && (
                                                    <h1 
                                                        className="bg-red-500 text-white w-3 h-3 rounded-full flex items-center justify-center"
                                                        >
                                                    </h1>

                                            )
                                        }

                                        <h1 className={`whitespace-nowrap ${item.status === 'read' ? 'font-sm' : 'font-bold'}`}>{item.time_created}</h1>

                                       
                                        
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 text-center font-bold text-2xl mt-5">
                                    No inbox messages available.
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InboxPage;
