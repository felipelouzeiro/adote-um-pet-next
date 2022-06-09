import { Button, Grid, Paper, Snackbar, TextField } from '@mui/material'
import { NextPage } from 'next'
import { useRegister } from '../../data/hooks/pages/pets/useRegister'
import { Title } from '../../ui/components/title'

const Register: NextPage = () => {
  const {
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
  } = useRegister()

  return (
    <>
      <Title
        title={'Cadastro de Pets para Adoção'}
        subtitle={'Preencha os dados do novo Pet'}
      />
      <Paper sx={{ maxWidth: 970, marginX: 'auto', padding: 5 }}>
        <Grid container sx={{ gap: 1 }}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label={'Nome'}
              placeholder={'Digite o nome do Pet'}
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label={'Descrição do Pet'}
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              label={'Foto'}
              placeholder={'Insira o endereço da imagem'}
              fullWidth
            />
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{ mt: 2 }}
              component={'a'}
              href={'https://ingur.com/uploud'}
              target={'_blank'}
            >
              Enviar imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              onClick={register}
              variant={'contained'}
              fullWidth
              sx={{ maxWidth: { md: 200 }, marginTop: 4 }}
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={message.length > 0}
        message={message}
        onClose={() => setMessage('')}
        autoHideDuration={2500}
      />
    </>
  )
}
export default Register
