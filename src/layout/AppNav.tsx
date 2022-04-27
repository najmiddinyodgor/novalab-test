import { FC } from 'react'
import { StyledAppNav } from './styles'
import { NavButton } from '../components/shared/NavButton'

const pages = [
  {
    path: '/',
    label: 'Home'
  }
]

export const AppNav: FC = () => {
  return (
    <StyledAppNav>
      {
        pages.map(page => (
          <li key={page.path}>
            <NavButton href={page.path}>
              {page.label}
            </NavButton>
          </li>
        ))
      }
    </StyledAppNav>
  )
}
