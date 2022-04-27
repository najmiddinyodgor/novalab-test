import styled from '@emotion/styled'
import { Layout } from 'antd'

export const StyledContainer = styled.div`
  max-width: 1002px;
  margin: 0 auto;
`

export const StyledContent = styled(Layout.Content)`
  min-height: calc(100vh - 64px);

  padding: 50px 0;
`

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledAppNav = styled.ul`
  display: flex;
  align-items: start;
  justify-content: flex-start;
`


export const StyledUserNav = styled.ul`
  display: flex;
  align-items: start;
  justify-content: flex-end;

  margin-left: auto;
`
