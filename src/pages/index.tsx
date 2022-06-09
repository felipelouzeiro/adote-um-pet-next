import type { NextPage } from 'next'
import { List } from '../ui/components/List'
import { Title } from '../ui/components/title'
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    petList,
    setSelectedPet,
    selectedPet,
    email,
    setEmail,
    donation,
    setDonation,
    message,
    setMessage,
    toAdopt,
  } = useIndex()

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
      <List pets={petList} onSelect={(pet) => setSelectedPet(pet)} />
      <Dialog
        open={selectedPet != null}
        fullWidth
        PaperProps={{ sx: { padding: '40px' } }}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantia mensal'}
              type={'number'}
              value={donation}
              onChange={(e) => setDonation(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: '40px' }}>
          <Button onClick={() => setSelectedPet(null)} color={'secondary'}>
            Cancelar
          </Button>
          <Button onClick={() => toAdopt()} variant={'contained'}>
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
  )
}

export default Home
