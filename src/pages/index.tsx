import type { NextPage } from 'next'
import { Title } from '../ui/components/title'

const Home: NextPage = () => {
  return (
    <>
      <Title
        title="Adote um pet"
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br /> pode{' '}
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
    </>
  )
}

export default Home
