import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { AppHeader } from './AppHeader'
import { StyledContainer, StyledContent } from './styles'

type Props = PropsWithChildren<{}>

export const AppLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Layout>
      <AppHeader />
      <StyledContent>
        <StyledContainer>
          {children}
        </StyledContainer>
      </StyledContent>
    </Layout>
  )
}
