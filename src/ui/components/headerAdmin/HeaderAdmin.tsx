import { HeaderContainer, Logo, LinksContainer } from './HeaderAdmin.style'
import { Link, Box } from '@mui/material'
import NextLink from 'next/link'

export const HeaderAdmin = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/images/logo.svg" alt="Adote um Pet" />
        <LinksContainer>
          <Link component={NextLink} href={'/pets/cadastro'}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={'/pets/relatorio'}>
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
