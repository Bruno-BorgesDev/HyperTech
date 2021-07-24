import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:8080/produtos'
    baseURL: 'https://producstecommersapi.herokuapp.com/products'
})
export default api;