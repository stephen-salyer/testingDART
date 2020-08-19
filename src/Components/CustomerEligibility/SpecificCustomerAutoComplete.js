import React from 'react';
import {
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
  TextField,
  ListItem,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';

const accountClassifications = [
  {selection: 'Agent'},
  {selection: 'Retailer / Dealer'},
  {selection: 'Distributor / Wholesaler'},
  {selection: 'Farmer Customer'},
  {selection: 'Farm Services'},
  {selection: 'Point Of Delivery'},
  {selection: 'Peer-to-Peer'},
  {selection: 'Buying Group'},
  {selection: 'Cooperative'},
  {selection: 'Multiplier'},
  {selection: 'Industrial'},
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function SpecificCustomerAutoComplete() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([
    accountClassifications[1],
    accountClassifications[3],
  ]);
  const [pendingValue, setPendingValue] = React.useState([]);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <Autocomplete
        open={open}
        id={id}
        onClose={handleClose}
        multiple
        disableClearable
        value={pendingValue}
        onChange={(event, newValue) => {
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={(option, {selected}) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{marginRight: 8}}
              checked={selected}
            />
            <ListItemText primary={option.selection} />
          </React.Fragment>
        )}
        options={[...accountClassifications].sort((a, b) => {
          let ai = value.indexOf(a);
          ai =
            ai === -1 ? value.length + accountClassifications.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi =
            bi === -1 ? value.length + accountClassifications.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.selection}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Account Classifications"
              placeholder="Search"
            />
          </>
        )}
      />
      <List
        component="div"
        disablePadding
        style={{maxHeight: '294px', overflow: 'scroll'}}
      >
        {value.map((label) => (
          <>
            <ListItem key={label.selection} divider style={{padding: 16}}>
              <ListItemText primary={label.selection} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <RemoveCircle />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </>
        ))}
      </List>
    </React.Fragment>
  );
}
