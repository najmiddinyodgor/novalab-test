import { FC } from 'react'
import styled from '@emotion/styled'

const StyledBanner = styled.div`
  height: 500px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFoundPage: FC = () => {
  return (
    <StyledBanner>
      <h1>404 | Not Found</h1>
    </StyledBanner>
  )
}
