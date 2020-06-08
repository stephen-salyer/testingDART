import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Checkbox,
  TextField,
  Box,
} from '@material-ui/core';
import {RemoveCircle, CheckBox, CheckBoxOutlineBlank} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function GitHubLabel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([
    geographyInformation[1],
    geographyInformation[11],
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
            <ListItemText primary={option.state} secondary={option.country} />
          </React.Fragment>
        )}
        options={[...geographyInformation].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + geographyInformation.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + geographyInformation.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.state}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="State / Province / Ect."
              placeholder="Search"
            />
          </>
        )}
      />
      <Box style={{height: '255px', overflow: 'scroll'}}>
        {value.map((label) => (
          <>
            <List>
              <ListItemText primary={label.state} secondary={label.country} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={handleClickRemove}
                  edge="end"
                  aria-label="delete"
                >
                  <RemoveCircle />
                </IconButton>
              </ListItemSecondaryAction>
            </List>
            <Divider />
          </>
        ))}
      </Box>
    </React.Fragment>
  );
}

const geographyInformation = [
  {
    state: 'Alabama',
    country: 'US',
    county: 'Wilburt',
  },
  {
    state: 'Arkansas',
    country: 'US',
    county: 'homer',
  },
  {
    state: 'Alabama1',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama2',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama3',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama4',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama5',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama6',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama7',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama8',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama9',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama10',
    country: 'US',
    county: 'Good for newcomers',
  },
  {
    state: 'Alabama11',
    country: 'US',
    county: 'Good for newcomers',
  },
];
