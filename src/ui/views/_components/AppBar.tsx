import MuiAppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

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

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <MuiAppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
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
    </React.Fragment>
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
