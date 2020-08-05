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
  Button,
  ListItem,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  CheckBoxOutlineBlank,
  CheckBox,
  RemoveCircle,
  Send,
} from '@material-ui/icons';
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
  {name: 'Monica Carroll', category: 'Other'},
  {name: 'Billy Lester', category: 'Financial'},
  {name: 'Lisa Hackerman', category: 'Financial'},
  {name: 'Amber Yogster', category: 'Other'},
  {name: 'Helga Mater', category: 'Other'},
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function CustomizedSelects() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([people[1], people[2]]);
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
    <Container maxWidth="sm">
      <Grid container>
        <Grid xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="outlined" color="primary" endIcon={<Send />}>
              Email Pending Owners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} style={{paddingTop: 16}}>
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
              options={[...people].sort((a, b) => {
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + people.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + people.indexOf(b) : bi;
                return ai - bi;
              })}
              groupBy={(people) => people.category}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <>
                  <TextField
                    onClick={handleClick}
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    {...params}
                    variant="outlined"
                    label="Owners"
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
                    <ListItem key={label.name} divider style={{padding: 8}}>
                      <ListItemText
                        secondary={
                          <Typography variant="body1">{label.name}</Typography>
                        }
                        primary={
                          <Typography variant="body2" color="textSecondary">
                            {label.category}
                          </Typography>
                        }
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
            </Box>
          </React.Fragment>
        </Grid>
      </Grid>
    </Container>
  );
}
