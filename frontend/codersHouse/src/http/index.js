import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:true,  // isse we can set our cookies
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
})

// list of all endpoints

export const sendOtp = (data) => instance.post('/api/send-otp', data);
export const verifyOtp = (data) => instance.post('/api/verify-otp', data);

export default instance; 