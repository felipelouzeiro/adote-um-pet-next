import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../ui/themes'
import { Header } from '../ui/components/header'
import { HeaderAdmin } from '../ui/components/headerAdmin/HeaderAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <HeaderAdmin />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
