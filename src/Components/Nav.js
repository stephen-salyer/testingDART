import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import 'date-fns';
import {List, ListItem, ListItemText, Link} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  formControl: {
    width: '100%',
  },
  colorChange: {
    color: '#FFFFFF',
  },
  linkNoDecoration: {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const links = [
    {label: 'Program List', href: '/program-list'},
    {label: 'Tower Review', href: '/tower-review'},
    {label: 'Member List', href: '/member-list'},
    {label: 'View Reports', href: '/reports'},
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          style={{
            zIndex: '999',
          }}
          onClick={toggleDrawer(anchor, false)}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        {links.map(({label, href}) => (
          <Link
            href={href}
            rel="noopener noreferrer"
            className={classes.linkNoDecoration}
            key={label}
          >
            <ListItem button>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={toggleDrawer('left', true)}
        className={classes.colorChange}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </Box>
  );
};

export default withRouter(Nav);
