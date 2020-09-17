import React, {useState} from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Collapse,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Close, Menu, ExpandLess, ExpandMore} from '@material-ui/icons';

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
  {label: 'Bug Hunter', to: '/bug-hunter'},
];

const Nav = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const [open, setMenuOpen] = React.useState(true);

  const handleClick = () => {
    setMenuOpen(!open);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Menu className={classes.colorChange} />
      </IconButton>
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
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Experimental States" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  onClick={() => setOpen(false)}
                  component={Link}
                  rel="noopener noreferrer"
                  to={'/geography-eligibility-v2'}
                  button
                  className={classes.nested}
                >
                  <ListItemText primary="Geography Eligibility V2" />
                </ListItem>
                <ListItem
                  onClick={() => setOpen(false)}
                  component={Link}
                  rel="noopener noreferrer"
                  to={'/unit-select-example'}
                  button
                  className={classes.nested}
                >
                  <ListItemText primary="Unit Select" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
