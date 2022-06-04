import {
  Description,
  Image,
  Information,
  ItemList,
  ListStyled,
  Name,
} from './List.style'
import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/patch'

interface IListPets {
  pets: Pet[]
}

export const List = (props: IListPets) => {
  return (
    <>
      <ListStyled>
        {props.pets.map((pet) => (
          <ItemList key={pet.id}>
            <Image src={pet.image} alt="Foto do pet" />
            <Information>
              <Name>{pet.name}</Name>
              <Description>{pet.description}</Description>
              <Button variant={'contained'} fullWidth>
                Adotar
              </Button>
            </Information>
          </ItemList>
        ))}
      </ListStyled>
    </>
  )
}
