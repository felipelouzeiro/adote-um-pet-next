import { HeaderContainer, Logo } from './Header.style'
import NextLink from 'next/link'
import { Link } from '@mui/material'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link component={NextLink} href={'/'}>
        <Logo src="/images/logo.svg" alt="Adote um Pet" />
      </Link>
    </HeaderContainer>
  )
}
