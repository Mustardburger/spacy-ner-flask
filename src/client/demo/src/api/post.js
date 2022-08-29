import axios from 'axios';

const postRequest = async (data) => {
    const url = "http://localhost:5000/predict";
    const config = { 
        headers: {  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    try {
        const response = await axios.post(url, JSON.stringify(data), config);
        if (response.status === 200) {
            console.log('success stuff');
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default postRequest;