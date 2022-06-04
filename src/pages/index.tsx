import type { NextPage } from 'next'
import { List } from '../ui/components/List'
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
      <List
        pets={[
          {
            id: 1,
            name: 'bidu',
            description:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur temporibus cupiditate inventore repudiandae ullam ratione, reiciendis adipisci eius quibusdam, veritatis non? Vitae architecto soluta perferendis quasi eaque placeat, totam dolores.',
            image:
              'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg',
          },
          {
            id: 1,
            name: 'bidu',
            description: 'Lorem ipsum dol totam dolores.',
            image:
              'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg',
          },
        ]}
      />
    </>
  )
}

export default Home
// id: number
// name: string
// description: string
// image: string
