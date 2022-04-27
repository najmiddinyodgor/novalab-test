import { FC } from 'react'
import { NavButton } from '../shared/NavButton'
import { SignUpForm } from '../SignUpForm'
import { LOGIN_FORM_KEY, LoginForm } from '../LoginForm'
import { useFormQuery } from '../../hooks/useFormQuery'

export const LoginField: FC = () => {
  const { showForm } = useFormQuery()

  const handleClick = () => {
    showForm(LOGIN_FORM_KEY)
  }

  return (
    <>
      <NavButton onClick={handleClick}>
        Log in
      </NavButton>

      <SignUpForm />
      <LoginForm />
    </>
  )
}
