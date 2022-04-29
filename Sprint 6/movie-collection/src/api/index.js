import axios from 'axios';

export const getApi = axios.create({
    baseURL: 'https://6268ba76f2c0cdabac034a07.mockapi.io/api/',
    headers: {
        "ContentType": 'application/json'
    }
})

export const endpointApi = 'https://6268ba76f2c0cdabac034a07.mockapi.io/api/'