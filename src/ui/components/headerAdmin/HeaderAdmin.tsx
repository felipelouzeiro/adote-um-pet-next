import { HeaderContainer, Logo, LinksContainer } from './HeaderAdmin.style'
import { Link, Box } from '@mui/material'
import NextLink from 'next/link'

export const HeaderAdmin = () => {
  return (
    <HeaderContainer>
      <div>
        <Link component={NextLink} href={'/'}>
          <Logo src="/images/logo.svg" alt="Adote um Pet" />
        </Link>

        <LinksContainer>
          <Link component={NextLink} href={'/pets/register'}>
            <a>Cadastrar Pet</a>
          </Link>

          <Link component={NextLink} href={'/pets/report'}>
            <a>
              Relatório
              <Box
                component={'span'}
                sx={{ display: { sm: 'initial', xs: 'none' } }}
              >
                s de Adoção
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  )
}
