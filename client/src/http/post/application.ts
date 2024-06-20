import axios from "axios";
import { Application } from "../../types/application";


export const Apply = async (applyCredentials: Application) => {

    console.log("applyCredentials: ", applyCredentials)

    try {
        const response = await axios.post("http://localhost:4040/application/add", applyCredentials, {
            withCredentials: true
        });
        // const statusOk = response.status === 200;

       console.log("response: ", response);
        
    } catch (error) {
        console.error(error)
    }
}

