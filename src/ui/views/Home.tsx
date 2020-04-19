import { Box, Button, List, ListItem, ListItemText } from '@material-ui/core'
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
    let isMounted = true
    getLists(user!, (lists) => {
      if (isMounted) {
        setLists(lists)
      }
    })
    return () => {
      isMounted = false
    }
  }, [user])

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
