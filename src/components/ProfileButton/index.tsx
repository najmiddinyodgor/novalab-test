import { FC } from 'react'
import { NavButton } from '../shared/NavButton'
import { useAppSelector } from '../../hooks/store'
import { Avatar } from 'antd'
import { selectUser } from '../../store/slices/auth'
import styled from '@emotion/styled'

const StyledButton = styled(NavButton)`
  b {
    display: inline-block;
    margin-left: 10px;
  }
`

export const ProfileButton: FC = () => {
  const user = useAppSelector(selectUser)

  return (
    <StyledButton href={'/cabinet'}>
      <Avatar src={user.avatar} />
      <b>
        {user.first_name}
      </b>
    </StyledButton>
  )
}
