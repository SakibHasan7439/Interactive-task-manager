import axios from "axios";

const axiosData = axios.create({
    baseURL: 'http://localhost:5000'
})

const UseAxios = () => {
    return axiosData;
};

export default UseAxios;