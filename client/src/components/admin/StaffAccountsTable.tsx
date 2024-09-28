import { StaffAccountCardProps } from '../../types/props';
import Swal from 'sweetalert2';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DeleteStaffAccount } from '../../http/delete/auth';
import { FetchStaffAccounts } from '../../http/get/auth';
import { StaffAccountFetch } from '../../types/auth';

const StaffAccountsTable: React.FC<StaffAccountCardProps> = ({ setStaffData }) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: DeleteStaffAccount,
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Staff Account Deleted!",
                showConfirmButton: false,
                timer: 1500
            });
            queryClient.invalidateQueries({ queryKey: ["staff_accounts"] });
        },
        onError: (error: any) => {
            console.error("Signup error:", error);
        },
    });

    const deleteStaffAccount = (staff_id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                mutation.mutate(staff_id);
            }
        });
    };

    const { data: response, isLoading } = useQuery({
        queryKey: ["staff_accounts"],
        queryFn: FetchStaffAccounts,
    });

    const staffAccounts: StaffAccountFetch[] = response?.data;

    console.log("staffAccounts: ", staffAccounts);

    if (isLoading) return <div className="text-white font-bold text-3xl">Fetching Staff Accounts.......</div>;

    return (
        <>
            <div className="flex flex-col bg-orange-100 w-[95%] h-full rounded-md overflow-y-auto overflow-x-hidden max-h-[80vh]">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffAccounts.map((data) => (
                                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600" key={data.id}>
                                            <td className="whitespace-nowrap pl-6 py-4 font-medium">{data.name}</td>
                                            <td className="whitespace-nowrap pl-6 py-4">{data.email}</td>
                                            <td className="flex gap-3 whitespace-nowrap pl-6 py-4">
                                                <button
                                                    onClick={() => setStaffData(data)}
                                                    className="w-1/4 bg-orange-400 rounded-md p-2 text-white hover:opacity-75"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteStaffAccount(data.id)}
                                                    className="w-1/4 bg-red-600 rounded-md p-2 text-white hover:opacity-75"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StaffAccountsTable;
