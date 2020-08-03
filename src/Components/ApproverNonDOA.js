import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Typography,
  ListItemText,
  List,
  ListItemSecondaryAction,
  Checkbox,
  ListItem,
  Collapse,
  Divider,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  CheckBoxOutlineBlank,
  CheckBox,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';
import ApproverMenu from './ApproverMenu';

export const people = [
  {
    name: 'Justice Madden',
    category: '',
    progress: 'Pending',
    wave: 'Wave 1',
    ted: '$1,000,000,000',
    year: '1 Year',
    type: 'Global Accounting',
  },
  {
    name: 'Amberto Shepard',
    category: '',
    progress: 'Not Started',
    wave: 'Wave 1',
    ted: '$1,789,000,000',
    year: '1 Year',
    type: 'Global Accounting',
  },
  {
    name: 'Anahi Mayo',
    category: '',
    progress: 'Pending',
    wave: 'Wave 2',
    ted: '$1,456,000,000',
    year: '2 Year',
    type: 'Global Accounting',
  },
  {
    name: 'Mohamed Ferrell',
    category: '',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'Global Accounting',
  },
  {
    name: 'Jaylin Mcneil',
    category: 'Sales',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'Non-DOA',
  },
  {
    name: 'Caden Sosa',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'Non-DOA',
  },
  {
    name: 'Monica Carroll',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'Non-DOA',
  },
  {
    name: 'Leia Roach',
    category: 'Maketing',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'Non-DOA',
  },
  {
    name: 'Kayden Jordan',
    category: 'Operations / Commercial Org.',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'DOA',
  },
  {
    name: 'Billy Lester',
    category: 'Operations / Commercial Org.',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'DOA',
  },
  {
    name: 'Kinsley Christian',
    category: 'Additional',
    progress: 'Approved',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
    type: 'DOA',
  },
];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function ApproverGlobalAccounting() {
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

  const [open, setOpen] = React.useState(true);

  const handleClickCollapse = () => {
    setOpen(!open);
  };

  return (
    <>
      <React.Fragment>
        <Autocomplete
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
          noOptionsText="No Options"
          renderOption={(option, {selected}) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{marginRight: 8}}
                checked={selected}
              />
              <ListItemText
                primary={
                  <>
                    <Typography
                      style={{lineHeight: '1.7'}}
                      variant="overline"
                      color="textSecondary"
                    >
                      {option.category}
                    </Typography>
                    <Typography variant="subtitle1" style={{marginTop: -2}}>
                      {option.type === 'DOA'
                        ? [option.name, option.year, option.ted].join(' • ')
                        : [option.name, option.year].join(' • ')}
                    </Typography>
                  </>
                }
              />
            </React.Fragment>
          )}
          options={[...people].sort((a, b) => {
            let ai = value.indexOf(a);
            ai = ai === -1 ? value.length + people.indexOf(a) : ai;
            let bi = value.indexOf(b);
            bi = bi === -1 ? value.length + people.indexOf(b) : bi;
            return ai - bi;
          })}
          groupBy={(people) => people.type}
          getOptionLabel={(option) => option.name}
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
        <List style={{padding: 0}}>
          <ListItem button onClick={handleClickCollapse}>
            <ListItemText primary="Global Accounting" secondary="2 Selected" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {open ? <Divider /> : <></>}
          {value.map((people) => (
            <>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem key={people.name} divider>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          style={{lineHeight: '1.7'}}
                          variant="overline"
                          color="textSecondary"
                        >
                          {people.category}
                        </Typography>
                        <Typography variant="subtitle1" style={{marginTop: -2}}>
                          {people.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{paddingBottom: 4}}
                        >
                          {[
                            people.progress,
                            people.wave,
                            people.ted,
                            people.year,
                          ].join(' • ')}
                        </Typography>
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <ApproverMenu />
                  </ListItemSecondaryAction>
                </ListItem>
              </Collapse>
            </>
          ))}
        </List>
      </React.Fragment>
    </>
  );
}
