import React from 'react';
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  ListItem,
  Typography,
  Collapse,
  List,
} from '@material-ui/core';
import {RemoveCircle, ExpandLess, ExpandMore} from '@material-ui/icons';
import CustomerSearchModal from '../CustomerSearchModal';

export default function CustomerEligibilityGroupsAutoComplete() {
  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box display="flex">
        <CustomerSearchModal />
      </Box>
      <Box style={{maxHeight: '550px', overflow: 'scroll'}}>
        <ListItem button onClick={handleClick1}>
          <ListItemText
            primary={
              <>
                <Box pt={1} pb={1}>
                  <Typography>Farmer Customer</Typography>
                </Box>
              </>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            style={{maxHeight: '228px', overflow: 'scroll'}}
          >
            <ListItem divider style={{padding: 16}}>
              <ListItemText primary="Bill WIlliamson" secondary="000123456" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <RemoveCircle />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </React.Fragment>
  );
}
