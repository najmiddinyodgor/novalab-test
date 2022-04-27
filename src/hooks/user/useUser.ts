import { useEffect, useState } from 'react'
import { User } from '../../types/models'
import { UserService } from '../../services/UserService'

export const useUser = (id: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      const { data: { data: user } } = await UserService.getUser(id)
      setUser(user)
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  return {
    isLoading,
    user
  }
}
