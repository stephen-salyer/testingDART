import React from 'react';
import {
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
  Box,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';
import OwnersToggle from './OwnersToggle';

const autoCompletes = [
  {
    id: '1',
    title: 'Add Marketing Owner',
    names: [
      'Justice Madden',
      'Alberto Shepard',
      'Monica Carroll',
      'Billy Lester',
      'Lisa Hackerman',
      'Amber Yogster',
      'Helga Mater',
    ],
  },
  {
    id: '2',
    title: 'Add Operations Owner',
    names: [
      'Anahi Mayo',
      'Mohamed Ferrell',
      'Leia Roach',
      'Kinsley Christian',
      'Hank Bobsman',
      'Ethan Mikman',
      'Heath Maples',
    ],
  },
  {
    id: '3',
    title: 'Add Finance Owner',
    names: [
      'Jaylin Mcneil',
      'Caden Sosa',
      'Kayden Jordan',
      'Mohamed Hegal',
      'John Seedsman',
      'Ricky Todds',
      'John Meris',
    ],
  },
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function CustomizedSelects() {
  const [openEl, setopenEl] = React.useState(null);
  const [value, setValue] = React.useState({
    [autoCompletes[0].id]: autoCompletes[0].names,
    [autoCompletes[1].id]: autoCompletes[1].names,
    [autoCompletes[2].id]: autoCompletes[2].names,
  });
  const [pendingValue, setPendingValue] = React.useState(value);

  const handleClick = (id) => () => {
    setPendingValue(value);
    setopenEl(id);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    setopenEl(null);
  };

  return (
    <Grid container spacing={3}>
      {autoCompletes.map(({title, names, id}) => (
        <Grid key={title} item xs={12} md={4}>
          <React.Fragment>
            <Autocomplete
              open={openEl === id}
              id={id}
              onClose={handleClose}
              multiple
              disableClearable
              value={pendingValue[id]}
              onChange={(event, newValue) => {
                setPendingValue((state) => ({...state, [id]: newValue}));
              }}
              disableCloseOnSelect
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(option, {selected}) => {
                const [first, last] = option.split(' ');
                return (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{marginRight: 8}}
                      checked={selected}
                    />
                    <ListItemText primary={first} secondary={last} />
                  </React.Fragment>
                );
              }}
              options={[...names].sort((a, b) => a.localeCompare(b))}
              renderInput={(params) => (
                <TextField
                  onClick={handleClick(id)}
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  {...params}
                  variant="outlined"
                  label={title}
                  placeholder="Search"
                />
              )}
            />
            <Box style={{height: '51vh', overflow: 'scroll'}}>
              {value[id] &&
                value[id].map((label) => {
                  const [first, last, ...rest] = label.split(' ');
                  return (
                    <>
                      <List key={label}>
                        <Box display="flex" alignItems="center">
                          <OwnersToggle />
                          <ListItemText
                            style={{paddingRight: 55}}
                            primary={`${first} ${rest.join(' ')}`}
                            secondary={last}
                          />

                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <RemoveCircle />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </Box>
                      </List>
                      <Divider />
                    </>
                  );
                })}
            </Box>
          </React.Fragment>
        </Grid>
      ))}
    </Grid>
  );
}
