import { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

type Props = PropsWithChildren<{
  href?: string
  onClick?: () => void,
  className?: string
}>

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 20px;

  color: #fff;
  font-size: 18px;

  cursor: pointer;
  transition-duration: 0.3s;

  &:hover,
  &:focus,
  &.active {
    background-color: #1890ff;
  }
`

const StyledNavLink = StyledButton.withComponent(NavLink)

export const NavButton: FC<Props> = ({ href, children, onClick, className }: Props) => {
  if (href) {
    return (
      <StyledNavLink to={href} onClick={onClick} className={className}>
        {children}
      </StyledNavLink>
    )
  }

  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}
