import axios, { AxiosRequestConfig } from 'axios'

const instans = axios.create({
    baseURL: 'http://localhost:5000'
})

instans.interceptors.request.use((config) => {
    // config.headers!.Authorization = window.localStorage.getItem('token')
    config.headers!.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    return config
})

export default instans