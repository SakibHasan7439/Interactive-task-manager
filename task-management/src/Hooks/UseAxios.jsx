import axios from "axios";

const axiosData = axios.create({
    baseURL: 'https://interactive-task-manager-server.vercel.app'
})

const UseAxios = () => {
    return axiosData;
};

export default UseAxios;