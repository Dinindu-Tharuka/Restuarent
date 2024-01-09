import axios from "axios";

// http://hotelbackend.ebrandinginnovations.com

// http://127.0.0.1:8000

export const BASE_URL = 'http://hotelbackend.ebrandinginnovations.com'

const axiosInstance =  axios.create({
    baseURL:`${BASE_URL}/api`,
    headers:{
        "Authorization":`JWT ${localStorage.getItem('access') || ''}`,
        "Content-Type":'application/json',
        }
   
   
})



export default axiosInstance