import { useState } from 'react'
import { Pet } from '../../@types/patch'

export function useIndex() {
  const [petList, setPetList] = useState([
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
  ])

  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)

  return {
    petList,
    selectedPet,
    setSelectedPet,
  }
}
