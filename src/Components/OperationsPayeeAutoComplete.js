import React from 'react';
import {
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
  Box,
  Divider,
  TextField,
  ListItem,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';

const autoCompletes = [
  {title: 'Agent'},
  {title: 'Dealer / Retailer'},
  {title: 'Distributor'},
  {title: 'GTM and Farmer Dual Pay'},
  {title: 'Licensee and Multiplier'},
  {title: 'Wholesale'},
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function OperationsPayeeAutoComplete() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([
    autoCompletes[1],
    autoCompletes[3],
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

  const handleClickRemove = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
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
            <ListItemText primary={option.title} />
          </React.Fragment>
        )}
        options={[...autoCompletes].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + autoCompletes.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + autoCompletes.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Payee"
              placeholder="Search"
            />
          </>
        )}
      />
      <Box style={{height: '290px', overflow: 'scroll'}}>
        {value.map((label) => (
          <React.Fragment key={label.title}>
            <List>
              <ListItem>
                <ListItemText primary={label.title} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={handleClickRemove}
                    edge="end"
                    aria-label="delete"
                  >
                    <RemoveCircle />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <Divider />
          </React.Fragment>
        ))}
      </Box>
    </React.Fragment>
  );
}
