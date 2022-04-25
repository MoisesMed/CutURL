import axios from 'axios';

const API_URL = "https://cors-anywhere.herokuapp.com/"+"https://api.encurtador.dev"
axios.defaults.baseURL = API_URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});