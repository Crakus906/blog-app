import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/'
});