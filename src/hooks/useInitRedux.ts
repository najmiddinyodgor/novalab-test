import { useAppDispatch } from './store'
import { logout, setUserInfo } from '../store/slices/auth'
import { useEffect } from 'react'
import { IS_FAKE_USER_KEY } from '../utils/constants'

export const useInitRedux = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem(IS_FAKE_USER_KEY) !== 'true') {
      dispatch(setUserInfo())
    } else {
      localStorage.removeItem(IS_FAKE_USER_KEY)
      dispatch(logout())
    }
  })
}
