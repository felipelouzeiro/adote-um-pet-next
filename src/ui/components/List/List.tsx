import {
  Description,
  Image,
  Information,
  ItemList,
  ListStyled,
  Name,
} from './List.style'
import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface IListPets {
  pets: Pet[]
  onSelect: (pet: Pet) => void
}

export const List = (props: IListPets) => {
  const maximumDescriptionSize = 200

  return (
    <>
      <ListStyled>
        {props.pets.map((pet) => (
          <ItemList key={pet.id}>
            <Image src={pet.photo} alt="Foto do pet" />
            <Information>
              <Name>{pet.name}</Name>
              <Description>
                {TextService.spliceText(
                  pet.description,
                  maximumDescriptionSize
                )}
              </Description>
              <Button
                variant={'contained'}
                fullWidth
                onClick={() => props.onSelect(pet)}
              >
                Adotar {pet.name}
              </Button>
            </Information>
          </ItemList>
        ))}
      </ListStyled>
    </>
  )
}
