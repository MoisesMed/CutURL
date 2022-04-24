import axios from 'axios';

const API_URL = "https://api.encurtador.dev/encurtamentos"
axios.defaults.baseURL = API_URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});