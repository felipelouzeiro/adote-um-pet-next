import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { NextPage } from 'next'
import { useReport } from '../../data/hooks/pages/pets/useReport'
import { Title } from '../../ui/components/title'

const Report: NextPage = () => {
  const { reportList } = useReport()
  return (
    <>
      <Title title={'Relatório'} subtitle={'Lista de pets adotados.'} />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: 'auto', padding: { xs: 3, md: 5 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pets</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportList.map(({ id, donation, email, pet }) => (
              <TableRow key={id}>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell align={'right'}>{`R$ ${donation}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Report
