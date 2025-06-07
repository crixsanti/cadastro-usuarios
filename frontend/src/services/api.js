import axios from "axios";

const api = axios.create({
    // baseURL: 'https://cadastro-usuarios-tk0f.onrender.com',
    // timeout: 10000,
    // headers: {
    //     'Content-Type': 'application/json'
    // }
    baseURL: 'http://localhost:3000'
});

export default api;