import axios from "axios";
import { AssessmentRender } from "../../types/assessment";

export const FetchAssessments = async (applicationID: number | undefined): Promise<AssessmentRender | undefined> => {

    try {
        const response = await axios.get(`http://localhost:4040/application/fetch/assessments/${applicationID}`, {
            withCredentials: true
        });
    
        return response.data;

    } catch (error) {
        console.error(error)
    }
   
}
