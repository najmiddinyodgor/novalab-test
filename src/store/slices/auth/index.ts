import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IS_FAKE_USER_KEY, TOKEN_KEY, USER_ID_KEY } from '../../../utils/constants'
import { AuthService, LoginDTO, SignUpDTO } from '../../../services/AuthService'
import { User } from '../../../types/models'
import { AppThunk, RootState } from '../../index'

export interface State {
  authenticated: boolean,
  user: null | User
}

const initialState: State = {
  authenticated: false,
  user: null
};

export const index = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserCredentials: (state: State, { payload }: PayloadAction<{ token: string, id: string }>) => {
      localStorage.setItem(TOKEN_KEY, payload.token)
      localStorage.setItem(USER_ID_KEY, payload.id)
    },
    authenticateUser: (state: State, { payload }: PayloadAction<{ user: User }>) => {
      state.user = payload.user
      state.authenticated = true
    },
    logout: (state: State) => {
      state.authenticated = false
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_ID_KEY)
    }
  }
});

export const selectUser = (state: RootState) => state.auth.user!

export const { saveUserCredentials, authenticateUser, logout } = index.actions

export const login =
  (data: LoginDTO): AppThunk => async (dispatch) => {
    const { data: { token } } = await AuthService.login(data)

    dispatch(saveUserCredentials({
      token,
      id: data.email
    }))

    dispatch(setUserInfo())
  }

export const signUp =
  (data: SignUpDTO): AppThunk => async (dispatch) => {
    const { data: { id, token } } = await AuthService.signUp(data)

    localStorage.setItem(IS_FAKE_USER_KEY, 'true')

    dispatch(saveUserCredentials({
      token,
      id: data.email
    }))

    dispatch(authenticateUser({
      user: {
        id,
        ...data
      }
    }))
  }

export const setUserInfo =
  (): AppThunk => async (dispatch) => {
    try {
      const res = await AuthService.getUserInfo(localStorage.getItem(USER_ID_KEY) as string)

      dispatch(authenticateUser(res))
    } catch (e: any) {
      dispatch(logout())
    }
  }

export default index.reducer;
