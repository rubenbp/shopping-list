import {
  AppBar as MuiAppBar,
  Avatar,
  createStyles,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  SwipeableDrawer,
  Theme,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ListIcon from '@material-ui/icons/List'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../../core/actions/auth/logout'
import { getLists, ItemsList } from '../../../core/actions/lists'
import { useSession } from '../../hooks/useSession'
import GenericAvatarImgUrl from '../../img/avatar.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {},
  }),
)

interface Props {
  children: React.ReactElement
  title?: string | undefined
}

export const AppBar: React.FC<Props> = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [lists, setLists] = useState<ItemsList[]>([])
  const { user } = useSession()

  useEffect(() => {
    let isMounted = true
    getLists(user!, (lists) => {
      if (!isMounted) return
      setLists(lists)
    })
    return () => {
      isMounted = false
    }
  }, [])

  function handleLogout() {
    setDrawerOpen(false)
    logout()
  }

  function goToNewList() {
    setDrawerOpen(false)
    history.push('/new-list')
  }

  function goToList(list: ItemsList) {
    setDrawerOpen(false)
    history.push(`/lists/${list.id}`)
  }

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        {!!user && (
          <>
            <List
              dense
              style={{ backgroundColor: deepPurple[700], color: 'white' }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={user.photoURL || GenericAvatarImgUrl} />
                </ListItemAvatar>
                <ListItemText primary={user.displayName} />
              </ListItem>
            </List>
            <List subheader={<ListSubheader>LISTAS</ListSubheader>}>
              {lists.map((list) => (
                <ListItem key={list.id} button onClick={() => goToList(list)}>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary={list.name} />
                </ListItem>
              ))}
              <ListItem button onClick={goToNewList}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Nueva lista" />
              </ListItem>
              <Divider />
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Desconectarse" />
              </ListItem>
            </List>
          </>
        )}
      </SwipeableDrawer>

      <ElevationScroll {...props}>
        <MuiAppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {props.title}
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
      <Toolbar />
      {props.children}
    </>
  )
}

const ElevationScroll: React.FC<Props> = ({ children }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
