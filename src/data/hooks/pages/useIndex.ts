import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Pet } from '../../@types/Pet'
import { ApiService } from '../../services/ApiServices'

export function useIndex() {
  const [petList, setPetList] = useState<Pet[]>([])
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [email, setEmail] = useState<string>('')
  const [donation, setDonation] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    ApiService.get('/pets').then((response) => {
      setPetList(response.data)
    })
  }, [])

  useEffect(() => {
    if (selectedPet === null) {
      clearFormFields()
    }
  }, [selectedPet])

  function toAdopt() {
    if (adoptValidate()) {
      ApiService.post('/adocoes', {
        pet_id: selectedPet?.id,
        email,
        donation,
      })
        .then(() => {
          setSelectedPet(null)
          setMessage('Adoção confirmada, verifique sua caixa de email')
        })
        .catch((error: AxiosError<any>) => {
          setMessage(error.response?.data.message)
        })
    } else {
      setMessage('Preencha todos os campos corretamente!')
    }
  }

  function adoptValidate() {
    return email.length > 0 && donation.length > 0 && selectedPet !== null
  }

  function clearFormFields() {
    setEmail('')
    setDonation('')
  }

  return {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    donation,
    setDonation,
    message,
    setMessage,
    toAdopt,
  }
}
