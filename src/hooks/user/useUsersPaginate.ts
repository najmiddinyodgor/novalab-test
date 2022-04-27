import { useCallback, useEffect, useState } from 'react'
import { User } from '../../types/models'
import { PaginateUsersResponse, UserService } from '../../services/UserService'

export const useUsersPaginate = () => {
  const perPageOptions = [
    4,
    8,
    12
  ]
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageOptions[0])
  const [users, setUsers] = useState<User[]>([])
  const [nextPage, setNextPage] = useState<number | null>(null)
  const [prevPage, setPrevPage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadPage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  useEffect(() => {
    const evaluateData = (data: PaginateUsersResponse) => {
      let { data: users, page, total_pages } = data

      setPrevPage(page > 1 ? page - 1 : null)
      setNextPage(page < total_pages ? page + 1 : null)

      setUsers(users)
    }

    const fetchUsers = async () => {
      setIsLoading(true)
      const { data } = await UserService.paginateUsers(currentPage, perPage)
      setIsLoading(false)

      evaluateData(data)
    }

    fetchUsers()
  }, [perPage, currentPage])

  return {
    perPage,
    setPerPage,
    loadPage,
    perPageOptions,
    currentPage,
    users,
    nextPage,
    prevPage,
    isLoading
  }
}
