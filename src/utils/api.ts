import axios, { AxiosRequestConfig } from 'axios'
import { TOKEN_KEY } from './constants'
import { useAppDispatch } from '../hooks/store'
import { logout } from '../store/slices/auth'

export class UnauthenticatedError extends Error {

}

const instance = axios.create({
  baseURL: 'https://reqres.in/api'
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})

instance.interceptors.response.use((config: AxiosRequestConfig) => {
  return config;
}, (e: any) => {
  if (e.response.status === 401 || e instanceof UnauthenticatedError) {
    const dispatch = useAppDispatch();
    dispatch(logout())
  }

  throw e
})

export default instance
