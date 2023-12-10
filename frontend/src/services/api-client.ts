import axios from "axios";

export const BASE_URL = 'http://127.0.0.1:8000'

const axiosInstance =  axios.create({
    baseURL:`${BASE_URL}/api`,
    headers:{
        "Authorization":`JWT ${localStorage.getItem('access') || ''}`,
        "Content-Type":'application/json',
    }
   
   
})

export default axiosInstance