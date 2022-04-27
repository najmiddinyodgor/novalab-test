import { FC } from 'react'
import { StyledUserNav } from './styles'
import { LoginField } from '../components/LoginField'
import { useAppSelector } from '../hooks/store'
import { ProfileButton } from '../components/ProfileButton'

export const UserNav: FC = () => {
  const { authenticated } = useAppSelector(state => state.auth)

  return (
    <StyledUserNav>
      {
        authenticated
          ? <ProfileButton />
          : <LoginField />
      }
    </StyledUserNav>
  )
}
