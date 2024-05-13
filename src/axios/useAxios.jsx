import axios from "axios"
import { useSelector } from "react-redux"
import { userAPI } from "../Constants/api"

const createUserInstance = () => {
    const token = useSelector((store) => store.Users.Token)
    const userInstance = axios.create({
        baseURL: userAPI,
    });
    userInstance.interceptors.request.use(
        (config) => {
            if (token) {
// console.log('h1','token::',token);
                config.headers["Authorization"] = `Bearer ${token}`
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return userInstance
}
export default createUserInstance