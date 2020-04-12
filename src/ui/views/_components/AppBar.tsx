import MuiAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { logout } from '../../../core/actions/auth/logout'
import { useSession } from '../../hooks/useSession'

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
}

export const AppBar: React.FC<Props> = (props) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { user } = useSession()

  function handleLogout() {
    setDrawerOpen(false)
    logout()
  }

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <List>
          {!!user && (
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Desconectarse" />
            </ListItem>
          )}
        </List>
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
              Lista de la compra
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