import { Application } from "../../../types/application";
import { classNames } from "../../../helpers/classNames";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateApplicationCode } from "../../../http/put/application";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function ApplicantInformationFormStaff({ applicantInfo, setInformationModal }: {
  applicantInfo: Application,
  setInformationModal: React.Dispatch<React.SetStateAction<boolean>>
}) {

  const { register, handleSubmit } = useForm<{ application_code: string }>();

  const applicantOwnership = [
    // { value: applicantInfo?.formOwnership, inputType: "text", ownerShipType: "Form Of Ownership" },
    { value: applicantInfo?.constructOwnbyEnterprise, inputType: "text", ownerShipType: "For Construction Owned By Enterprise" },
  ]

  const applicantNumber = [
    { value: applicantInfo?.taxAccountNo, inputType: "number", numberType: "Tax Account No." },
    { value: applicantInfo?.telNo, inputType: "number", numberType: "Telephone No." },
    { value: applicantInfo?.tctNo, inputType: "number", numberType: "TCT No." },
  ]

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: UpdateApplicationCode,
    onSuccess: (data) => {
      console.log("response from update code: ", data.data);

      if(data.data === "Application_Code_Existed"){
        Swal.fire({
          icon: "error",
          title: "Application Code Already Existed",
          text: "Please type another unique code",
          showConfirmButton: false,
        });

        return;
      }
      
      queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

      Swal.fire({
        icon: "success",
        title: "Application Submitted to the Administrator",
        showConfirmButton: false,
      });

      setInformationModal(false);
    },

    onMutate: () => {
      Swal.fire({
          title: 'Please wait...',
          text: 'Your request is being processed',
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
              Swal.showLoading();
          },
      });
  },
  
    onError: (error: unknown) => {
      console.error("Set Assessment:", error);
    },
  });

  const onSubmit: SubmitHandler<{ application_code: string }> = (data) => {
    console.log("code: ", data.application_code);

    const updateApplicationData = {
      application_id: applicantInfo.application_id,
      application_code: data.application_code,
      email: applicantInfo.email,
      firstname: applicantInfo.firstname,
      middleInitial: applicantInfo.middleInitial,
      lastName: applicantInfo.lastName,
      user_id: Number(applicantInfo.user_id)
    };

    mutation.mutate(updateApplicationData);
  }

  const isPending = applicantInfo.assessment_status.toLowerCase() === 'pending' || applicantInfo.assessment_status.toLowerCase() === 'set';


  return (
    <div className="w-full rounded-md p-8">

      <button 
        type="button"
        className="absolute top-3 right-5 font-bold text-xl p-2 hover:opacity-75 mt-1" 
        onClick={() => setInformationModal(false)}
      >
          <FontAwesomeIcon icon={faX} /> 
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <label className="font-semibold">Applicant Code</label>
            <div className="flex gap-2">
              <input 
                type="text"
                maxLength={20}
                className={classNames(
                  isPending ? "hover:cursor-not-allowed": "",
                  "bg-gray-400 placeholder-black rounded-md p-2 focus:outline-orange-500"
                )}
                {...register("application_code")}
                defaultValue={applicantInfo?.applicationCode}
                disabled={isPending}
              />
            </div>
          </div>
        </div>

        <label className="font-semibold">Applicant Name</label>
        <div className="flex gap-2">
          <input 
            type="text"
            value={`${applicantInfo?.firstname} ${applicantInfo?.middleInitial} ${applicantInfo?.lastName}`} 
            className={classNames("bg-gray-400 placeholder-black rounded-md p-2 focus:outline-orange-500 w-full")}
            readOnly
          />
        </div>

        <div className="flex gap-5">
          {applicantOwnership.map((data) => (
            <div className="w-full flex flex-col justify-center" key={data.ownerShipType}>
              <label className="font-semibold">{data.ownerShipType}</label>
              <input 
                type={data.inputType} 
                value={data.value} 
                className={classNames("bg-gray-400 placeholder-black rounded-md p-2 focus:outline-orange-500 w-full")}
                readOnly
              />
            </div>
          ))}
        </div>

        <label className="font-semibold">Applicant Address</label>
        <div className="flex gap-2 flex-wrap">
          <input 
            type="text"
            value={`${applicantInfo?.barangay} ${applicantInfo?.street} ${applicantInfo?.municipality} ${applicantInfo?.zipCode}`} 
            className={classNames("bg-gray-400 placeholder-black  rounded-md p-2 focus:outline-orange-500 w-full")}
            readOnly
          />
        </div>

        <label className="font-semibold">Location for Construction/Installation</label>
        <div className="flex gap-2 flex-wrap">
          <input 
            type="text"
            value={applicantInfo?.locationForConstruct_Install} 
            className={classNames("bg-gray-400 placeholder-black rounded-md p-2 focus:outline-orange-500 w-full")}
            readOnly
          />
        </div>

        <div className="flex gap-2 mt-3">
          {applicantNumber.map((data) => (
            <div className="flex flex-col justify-center" key={data.numberType}>
              <label className="font-semibold">{data.numberType}</label>
              <input 
                type={data.inputType} 
                value={data.value} 
                className={classNames("bg-gray-400 placeholder-black rounded-md p-2 focus:outline-orange-500 w-full")}
                readOnly
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">

          {!isPending && (
            <button
              className="bg-orange-700 text-white font-bold rounded-md p-2 mt-1 hover:opacity-75"
              type="submit"
            >
              Submit
            </button>
          )}


          <button 
            type="button"
            className="bg-black text-white font-bold rounded-md p-2 hover:opacity-75 mt-1" 
            onClick={() => setInformationModal(false)}
          >
            Close 
          </button>
        </div>
      </form>
    </div>
  );
}
