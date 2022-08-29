import axios from 'axios';

const postRequest = async (data) => {
    const url = "http://localhost:5000/predict-pretty";

    try {
        const response = await axios.post(url, data);
        if (response.status === 200) {
            console.log('success stuff');
            console.log(response);
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default postRequest;