import axios from "axios";

const axiosData = axios.create({
    baseURL: 'http://localhost:3000'
})

const UseAxios = () => {
    return axiosData;
};

export default UseAxios;