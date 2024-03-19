import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

export const instance  = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        Authorization: 'Bearer '+ getTokenFromLocalStorage()
    }
})

export const multiInstance  = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        Authorization: 'Bearer '+ getTokenFromLocalStorage(),
        "Content-Type": "multipart/form-data; boundary=AaB03x"
    }
})



export const IMAGE_URL = 'http://localhost:3000/files/'