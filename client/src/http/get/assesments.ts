import axios from "axios";
import { AssessmentRender } from "../../types/assessment";
import { DOMAIN_NAME } from "../../envPaths";

export const FetchAssessments = async (applicationID: number | undefined): Promise<AssessmentRender | undefined> => {

    try {
        const response = await axios.get(`${DOMAIN_NAME}/application/fetch/assessments/${applicationID}`, {
            withCredentials: true
        });
    
        return response.data;

    } catch (error) {
        console.error(error)
    }
   
}
