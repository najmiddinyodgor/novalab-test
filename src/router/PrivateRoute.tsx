import { FC } from 'react'
import { useAppSelector } from '../hooks/store'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  redirectPath?: string
}

export const PrivateRoute: FC<Props> = ({ redirectPath = '/' }: Props) => {
  const { authenticated } = useAppSelector(state => state.auth)

  if (!authenticated) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
