import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'
import { PrivateRoute } from './PrivateRoute'
import { CabinetPage } from '../pages/CabinetPage'

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/profile/:id'} element={<ProfilePage />} />
      <Route element={<PrivateRoute />}>
        <Route path={'/cabinet'} element={<CabinetPage />} />
      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}
