import React from 'react';
import {
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  TextField,
  ListItem,
  List,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';

const scopes = [
  {
    name:
      'North America • United States of America • Crop Protection • Glyphosate • All',
  },
  {
    name:
      'North America • United States of America • Crop Protection • Glyphosate • Roundup',
  },
  {
    name:
      'North America • United States of America • Crop Protection • Glyphosate • Degree Xtra',
  },
  {
    name:
      'North America • United States of America • Crop Protection • Dicamba • Roundup Xtra',
  },
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function ComponentScopeSelector() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([scopes[0], scopes[1]]);
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

  const open1 = Boolean(anchorEl);
  const id = open1 ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <Autocomplete
        open={open1}
        id={id}
        anchorEl={anchorEl}
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
            <ListItemText primary={option.name} />
          </React.Fragment>
        )}
        options={[...scopes].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + scopes.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + scopes.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Component Scopes"
              placeholder="Search"
            />
          </>
        )}
      />
      <Box style={{maxHeight: '550px', overflow: 'scroll'}}>
        <List
          component="div"
          disablePadding
          style={{maxHeight: '228px', overflow: 'scroll'}}
        >
          {value.map((label) => (
            <>
              <ListItem key={label.name} divider style={{padding: 16}}>
                <ListItemText style={{paddingRight: 32}} primary={label.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <RemoveCircle />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
}
