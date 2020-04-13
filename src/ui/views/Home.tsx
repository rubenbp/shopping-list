import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getLists, ItemsList } from '../../core/actions/lists'
import { useSession } from '../hooks/useSession'
import { AppBar } from './_components/AppBar'

export const Home = () => {
  const [lists, setLists] = useState<ItemsList[] | null>(null)
  const history = useHistory()
  const { user } = useSession()

  useEffect(() => {
    getLists(user!, (lists) => {
      console.log(lists)
      setLists(lists)
    })
  }, [])

  return (
    <AppBar title="Tus listas">
      <>
        {lists && lists.length > 0 && (
          <List>
            {lists.map((list) => (
              <ListItem
                key={list.id}
                button
                onClick={() => history.push(`/lists/${list.id}`)}
              >
                <ListItemText primary={list.name} />
              </ListItem>
            ))}
          </List>
        )}

        {lists && lists.length === 0 && (
          <Box justifyContent="center" marginTop={8} display="flex">
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => history.push('/new-list')}
            >
              Crea tu primera lista
            </Button>
          </Box>
        )}
      </>
    </AppBar>
  )
}
