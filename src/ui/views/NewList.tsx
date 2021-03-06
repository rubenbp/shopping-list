import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addNewList } from '../../core/actions/lists/addNewList'
import { useSession } from '../hooks/useSession'
import { AppBar } from './_components/AppBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      width: '100%',
    },
    button: {
      width: '100%',
    },
  }),
)

export const NewList: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [sharedWith, setSharedWith] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(false)
  const sytles = useStyles()
  const { user } = useSession()
  const history = useHistory()

  const handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSharedChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSharedWith(event.target.value)
  }

  const handleNew = async () => {
    setDisabledButton(true)
    const listRef = await addNewList(user!, {
      name,
      sharedWidth: sharedWith.trim(),
    })
    history.push(`/lists/${listRef.id}`)
  }

  return (
    <AppBar title="Nueva lista">
      <Container>
        <Box my={2}>
          <form noValidate autoComplete="off">
            <TextField
              className={sytles.field}
              label="Nombre"
              value={name}
              onChange={handleNameChanged}
              margin="normal"
            />
            <TextField
              className={sytles.field}
              label="Compartir con"
              helperText="Un email por línea"
              multiline
              value={sharedWith}
              onChange={handleSharedChanged}
              margin="normal"
            />
            <Box marginTop={3}>
              <Button
                className={sytles.button}
                variant="contained"
                color="primary"
                onClick={handleNew}
                disabled={disabledButton}
              >
                Crear la lista
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </AppBar>
  )
}
