import React from 'react';
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Box,
  ListItem,
  Typography,
  Collapse,
  List,
  makeStyles,
} from '@material-ui/core';
import {RemoveCircle, ExpandLess, ExpandMore} from '@material-ui/icons';
import ProductEligibilityMaterialSearchModal from '../ProductEligibility/ProductEligibilityMaterialSearchModal';

const useStyles = makeStyles((theme) => ({
  textField: {
    [`& fieldset`]: {
      borderRadius: '5px 0 0 5px',
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    minWidth: '1000px',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

export default function CustomerEligibilityGroupsAutoComplete() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box display="flex">
        <Box display="flex" flexDirection="column" style={{width: '120%'}}>
          <TextField
            error
            helperText="Customer Not Found."
            className={classes.textField}
            variant="outlined"
            label="Customers"
            defaultValue="0001234567"
            placeholder="Search Name or SAPID"
          />
        </Box>
        <div>
          <ProductEligibilityMaterialSearchModal />
        </div>
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
