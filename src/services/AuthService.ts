import { AxiosResponse } from 'axios'
import api, { UnauthenticatedError } from '../utils/api'
import { User } from '../types/models'
import { UserService } from './UserService'

export type LoginDTO = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  id: string
}

export type SignUpDTO = {
  first_name: string
  last_name: string
  avatar: string
  email: string
  password: string
}

export type SignUpResponse = {
  id: number
  token: string
}

export type UserInfoResponse = {
  user: User
}

export class AuthService {
  static login (data: LoginDTO): Promise<AxiosResponse<LoginResponse>> {
    return api.post<LoginResponse>('/login', data)
  }

  static signUp (data: SignUpDTO): Promise<AxiosResponse<SignUpResponse>> {
    return api.post<SignUpResponse>('/register', data)
  }

  static async getUserInfo (id: string): Promise<UserInfoResponse> {
    if (!id) {
      throw new UnauthenticatedError()
    }

    const { data: { data: users } } = await UserService.getUsers()

    const user = users.find(user => user.email === id)

    if (!user) {
      throw new UnauthenticatedError()
    }

    return { user }
  }
}
