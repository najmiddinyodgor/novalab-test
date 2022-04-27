import { FC } from 'react'
import { Layout } from 'antd'
import { StyledContainer, StyledNav } from './styles'
import { AppNav } from './AppNav'
import { UserNav } from './UserNav'

export const AppHeader: FC = () => {
  return (
    <Layout.Header>
      <StyledContainer>
        <StyledNav>
          <AppNav />
          <UserNav />
        </StyledNav>
      </StyledContainer>
    </Layout.Header>
  )
}
