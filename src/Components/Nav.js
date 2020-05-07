import React, {useState} from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Close, Menu} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
  colorChange: {
    color: '#FFFFFF',
  },
  linkNoDecoration: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const links = [
  {label: 'Program List', to: '/program-list'},
  {label: 'Tower Review', to: '/tower-review'},
  {label: 'Member List', to: '/member-list'},
  {label: 'Approval Status', to: '/approval-status'},
  {label: 'View Reports', to: '/reports'},
];

const Nav = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} className={classes.colorChange} />
      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)} color="inherit">
            <Close />
          </IconButton>
        </Box>

        <div className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {links.map(({label, to}) => (
              <Link to={to} className={classes.linkNoDecoration} key={label}>
                <ListItem button onClick={() => setOpen(false)}>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
