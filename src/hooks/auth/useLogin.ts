import { useState } from 'react'
import { LoginDTO } from '../../services/AuthService'
import { login as storeLogin } from './../../store/slices/auth'
import { useAppDispatch } from '../store'

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = async (data: LoginDTO): Promise<void> => {
    try {
      setIsLoading(true)
      dispatch(storeLogin(data))
    } catch (e: any) {
      setError(e.response?.data?.error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    isLoading,
    login
  }
}
