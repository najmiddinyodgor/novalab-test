import { useState } from 'react'
import { SignUpDTO } from '../../services/AuthService'
import { signUp as storeSignUp } from './../../store/slices/auth'
import { useAppDispatch } from '../store'

export const useSignUp = () => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUp = async (data: SignUpDTO): Promise<void> => {
    try {
      setIsLoading(true)
      dispatch(storeSignUp(data))
    } catch (e: any) {
      setError(e.response?.data?.error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    isLoading,
    signUp
  }
}
