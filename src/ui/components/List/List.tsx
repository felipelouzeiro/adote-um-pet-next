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
import { TextService } from '../../../data/@types/TextService'

interface IListPets {
  pets: Pet[]
}

export const List = (props: IListPets) => {
  const maximumDescriptionSize = 200
  return (
    <>
      <ListStyled>
        {props.pets.map((pet) => (
          <ItemList key={pet.id}>
            <Image src={pet.image} alt="Foto do pet" />
            <Information>
              <Name>{pet.name}</Name>
              <Description>
                {TextService.spliceText(
                  pet.description,
                  maximumDescriptionSize
                )}
              </Description>
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
