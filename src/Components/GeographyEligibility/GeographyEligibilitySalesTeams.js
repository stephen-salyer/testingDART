import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  TextField,
  Box,
  ListItem,
  Typography,
  Collapse,
  List,
} from '@material-ui/core';
import {
  RemoveCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function GeographyEligibilitySalesTeams() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([salesInformation[0]]);
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

  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
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
            <ListItemText
              secondary={[option.county, option.state].join(' • ')}
              primary={[option.team].join(' • ')}
            />
          </React.Fragment>
        )}
        options={[...salesInformation].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + salesInformation.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + salesInformation.indexOf(b) : bi;
          return ai - bi;
        })}
        groupBy={(salesInformation) => salesInformation.country}
        getOptionLabel={(option) => option.team}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Region"
              placeholder="Search"
            />
          </>
        )}
      />
      <Box style={{maxHeight: '550px', overflow: 'scroll'}}>
        <ListItem button onClick={handleClick1}>
          <ListItemText
            primary={
              <>
                <Box pt={1} pb={1}>
                  <Typography>US</Typography>
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
            {value.map((label) => (
              <>
                <ListItem key={label.county} divider style={{padding: 8}}>
                  <ListItemText
                    secondary={[label.county, label.state].join(' • ')}
                    primary={[label.team].join(' • ')}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircle />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>
            ))}
          </List>
        </Collapse>
      </Box>
    </React.Fragment>
  );
}

const salesInformation = [
  {
    county: 'NorthWest',
    state: 'Ohio',
    country: 'US',
    team: 'N201',
  },
  {
    county: 'SouthWest',
    state: 'Ohio',
    country: 'US',
    team: 'N202',
  },
  {
    county: 'EastWest',
    state: 'Ohio',
    country: 'US',
    team: 'N203',
  },
  {
    county: 'WestWest',
    state: 'Ohio',
    country: 'US',
    team: 'N204',
  },
];
