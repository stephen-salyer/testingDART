import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  List,
  ListItemSecondaryAction,
  Container,
  Checkbox,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {RemoveCircle, CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons';
import ApproverManualNotify from './ApproverManualNotify';

export const people = [
  {
    name: 'Justice Madden',
    category: 'Legal',
    progress: 'Pending',
    wave: 'Wave 1',
    ted: '$1,000,000,000',
    year: '1 Year',
  },
  {
    name: 'Alberto Shepard',
    category: 'Legal',
    progress: 'Not Started',
    wave: 'Wave 1',
    ted: '$1,789,000,000',
    year: '1 Year',
  },
  {
    name: 'Anahi Mayo',
    category: 'Sales',
    progress: 'Pending',
    wave: 'Wave 2',
    ted: '$1,456,000,000',
    year: '2 Year',
  },
  {
    name: 'Mohamed Ferrell',
    category: 'Sales',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Jaylin Mcneil',
    category: 'Sales',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Caden Sosa',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Monica Carroll',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Leia Roach',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Kayden Jordan',
    category: 'Operations / Commercial Org.',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Billy Lester',
    category: 'Operations / Commercial Org.',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
  {
    name: 'Kinsley Christian',
    category: 'Additional',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function ApproverGlobalAccounting() {
  const [openEl, setopenEl] = React.useState(null);
  const [value, setValue] = React.useState({[people[0]]: people[0].names});
  const [pendingValue, setPendingValue] = React.useState(value);

  const handleClick1 = () => {
    setPendingValue(value);
    setopenEl();
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    setopenEl(null);
  };

  return (
    <>
      <Container maxWidth="sm">
        <React.Fragment>
          <Autocomplete
            open={openEl}
            onClose={handleClose1}
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
                onClick={handleClick1}
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                {...params}
                variant="outlined"
                label="Add Owners"
                placeholder="Search Here"
              />
            )}
          />
          <Box style={{height: '400px', overflow: 'scroll'}}>
            {people.map(({name, category, progress, wave, ted, year}) => (
              <React.Fragment key={name}>
                <List>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <ApproverManualNotify />
                    <Box display="flex" flexDirection="column" pr={6}>
                      <Typography
                        style={{lineHeight: '1.7'}}
                        variant="overline"
                      >
                        {category}
                      </Typography>
                      <Typography variant="subtitle1">{name}</Typography>
                      <Typography
                        color="textSecondary"
                        style={{paddingBottom: 4}}
                      >
                        {[progress, wave, ted, year].join(' • ')}
                      </Typography>
                    </Box>
                  </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircle />
                    </IconButton>
                  </ListItemSecondaryAction>
                </List>
                <Divider />
              </React.Fragment>
            ))}
          </Box>
        </React.Fragment>
        {/* <Autocomplete
          options={people}
          MenuProps={MenuProps}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Searh Approvers" variant="outlined" />
          )}
        />
        <Box style={{maxHeight: '365px', overflow: 'scroll'}}>
          {approvers.map(({progress, name, wave, ted, year}, i) => (
            <>
              <List key={i}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <ApproverManualNotify />
                  <Box display="flex" flexDirection="column" pr={6}>
                    <ListItemText
                      style={{margin: 0}}
                      primary={
                        <Typography variant="overline" style={{lineHeight: 0}}>
                          {progress}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="subname1">{name}</Typography>
                      }
                    />
                    <ListItemText
                      style={{margin: 0}}
                      primary={[wave, ted, year].join(' • ')}
                    />
                  </Box>
                  <ListItemSecondaryAction></ListItemSecondaryAction>
                </Box>
              </List>
              <Divider />
            </>
          ))}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Remove Approver</MenuItem>
          </Menu>
        </Box> */}
      </Container>
    </>
  );
}
