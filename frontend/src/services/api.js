import axios from "axios";

const api = axios.create({
    //baseURL: 'https://cadastro-usuarios-9g2a.onrender.com'
    baseURL: 'http://localhost:3000'
})

export default api