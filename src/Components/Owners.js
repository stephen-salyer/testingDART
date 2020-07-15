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
  Container,
  Typography,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';
import OwnersToggle from './OwnersToggle';

const people = [
  {name: 'Jaylin Mcneil', category: 'Financial'},
  {name: 'Caden Sosa', category: 'Financial'},
  {name: 'Mohamed Ferrell', category: 'Operations'},
  {name: 'Mohamed Hegal', category: 'Financial'},
  {name: 'John Seedsman', category: 'Financial'},
  {name: 'Ricky Todds', category: 'Marketing'},
  {name: 'John Meris', category: 'Financial'},
  {name: 'Anahi Mayo', category: 'Marketing'},
  {name: 'Justice Madden', category: 'Financial'},
  {name: 'Kayden Jordan', category: 'Financial'},
  {name: 'Leia Roach', category: 'Marketing'},
  {name: 'Kinsley Christian', category: 'Financial'},
  {name: 'Hank Bobsman', category: 'Financial'},
  {name: 'Ethan Mikman', category: 'Financial'},
  {name: 'Heath Maples', category: 'Financial'},
  {name: 'Alberto Shepard', category: 'Financial'},
  {name: 'Monica Carroll', category: 'Financial'},
  {name: 'Billy Lester', category: 'Financial'},
  {name: 'Lisa Hackerman', category: 'Financial'},
  {name: 'Amber Yogster', category: 'Financial'},
  {name: 'Helga Mater', category: 'Financial'},
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function CustomizedSelects() {
  const [openEl, setopenEl] = React.useState(null);
  const [value, setValue] = React.useState({[people[0]]: people[0].names});
  const [pendingValue, setPendingValue] = React.useState(value);

  const handleClick = () => {
    setPendingValue(value);
    setopenEl();
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    setopenEl(null);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <React.Fragment>
            <Autocomplete
              open={openEl}
              onClose={handleClose}
              multiple
              disableClearable
              onChange={(event, newValue) => {
                setPendingValue((state) => ({...state, newValue}));
              }}
              disableCloseOnSelect
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(option, {selected}) => (
                <React.Fragment key={option.name}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{marginRight: 8}}
                    checked={selected}
                  />
                  <ListItemText primary={option.name} />
                </React.Fragment>
              )}
              options={people.sort((a, b) => -b.name.localeCompare(a.name))}
              groupBy={(people) => people.category}
              getOptionLabel={(people) => people.category}
              renderInput={(params) => (
                <TextField
                  onClick={handleClick}
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  {...params}
                  variant="outlined"
                  label="Add Owners"
                  placeholder="Search Here"
                />
              )}
            />
            <Box style={{height: '51vh', overflow: 'scroll'}}>
              {people.map(({name, category}) => (
                <React.Fragment key={name}>
                  <List>
                    <Box display="flex" alignItems="center">
                      <OwnersToggle />
                      <ListItemText
                        style={{paddingRight: 55}}
                        secondary={
                          <Typography variant="body1">{name}</Typography>
                        }
                        primary={
                          <Typography variant="body2" color="textSecondary">
                            {category}
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <RemoveCircle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Box>
                  </List>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
          </React.Fragment>
        </Grid>
      </Grid>
    </Container>
  );
}
