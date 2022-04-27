import api from '../utils/api'
import { AxiosResponse } from 'axios'
import { User } from '../types/models'

export type GetUsersResponse = {
  data: User[]
}

export type PaginateUsersResponse = {
  data: User[]
  page: number
  per_page: number
  total: number
  total_pages: number
}

export type GetUserResponse = {
  data: User
}

export class UserService {
  static getUsers (): Promise<AxiosResponse<GetUsersResponse>> {
    return api.get<GetUsersResponse>('users')
  }

  static paginateUsers (page: number, perPage?: number): Promise<AxiosResponse<PaginateUsersResponse>> {
    let url = `users?page=${page}`
    if (perPage) {
      url += `&per_page=${perPage}`
    }
    return api.get<PaginateUsersResponse>(url)
  }

  static getUser (id: number): Promise<AxiosResponse<GetUserResponse>> {
    return api.get<GetUserResponse>(`users/${id}`)
  }
}
