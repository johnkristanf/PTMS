import { ChangeEvent } from "react";

function AssessmentDropDown({
    onPermitChange
}: {
    onPermitChange: (e: ChangeEvent<HTMLSelectElement>) => void
}){

    const permitTypes = [
        { permit_type: "All" },
        { permit_type: "Building" },
        { permit_type: "Plumbing" },
        { permit_type: "Electrical" },
        { permit_type: "Electronics" },
        { permit_type: "Excavation" },
        { permit_type: "Mechanical" },
        { permit_type: "Fencing" },
        { permit_type: "Signed" },
        { permit_type: "Demolition"},
    
    ];
    

    return(
        <div className="w-[80%] flex justify-end">
                                            <select 
                                                id="permitTypes" 
                                                className="w-[40%] focus:outline-none border-2 border-orange-700 p-1 rounded-md"
                                                onChange={onPermitChange}
                                            >
                                                {
                                                    permitTypes.map((permit, index) => (
                                                        <option 
                                                            key={index} 
                                                            value={permit.permit_type}
                                                        >
                                                            {permit.permit_type}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
    )
}

export default AssessmentDropDown;