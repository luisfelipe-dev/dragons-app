import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_API,
})

export default API
