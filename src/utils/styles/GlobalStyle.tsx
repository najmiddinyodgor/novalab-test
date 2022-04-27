import { Global, css } from '@emotion/react'
import { FC } from 'react'

const styles = css`
  button {
    background-color: transparent;
    border: none;
  }
`

export const GlobalStyle: FC = () => {
  return (
    <Global styles={styles} />
  )
}
