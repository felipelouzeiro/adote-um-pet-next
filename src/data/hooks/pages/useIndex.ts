import { useEffect, useState } from 'react'
import { Pet } from '../../@types/patch'
import { ApiService } from '../../services/ApiServices'

export function useIndex() {
  const [petList, setPetList] = useState<Pet[]>([])
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [email, setEmail] = useState<string>('')
  const [donation, setDonation] = useState<string>('')
  const [confirmationMessage, setConfirmationMessage] = useState<string>(
    'Adoção confirmada, verifique sua caixa de email'
  )

  function toAdopt() {}

  useEffect(() => {
    ApiService.get('/pets').then((response) => {
      setPetList(response.data)
    })
  }, [])

  return {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    donation,
    setDonation,
    confirmationMessage,
    setConfirmationMessage,
    toAdopt,
  }
}
