import { AxiosError } from 'axios'
import { useState } from 'react'
import { ApiService } from '../../../services/ApiServices'

export function useRegister() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [message, setMessage] = useState('')

  function register() {
    if (formValidate()) {
      ApiService.post('/pets', {
        name,
        description,
        photo,
      })
        .then(() => {
          clear()
          setMessage('Pet cadastrado com sucesso!')
        })
        .catch((error: AxiosError) => {
          setMessage(error.response?.data.message)
        })
    } else {
      setMessage('Preencha todos os campos!')
    }
  }

  function clear() {
    setName('')
    setDescription('')
    setPhoto('')
  }

  function formValidate() {
    return name.length > 1 && description.length > 10 && photo.length > 5
  }

  return {
    name,
    setName,
    photo,
    setPhoto,
    description,
    setDescription,
    message,
    setMessage,
    clear,
    register,
    formValidate,
  }
}
