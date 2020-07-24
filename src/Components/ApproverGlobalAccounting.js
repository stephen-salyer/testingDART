import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Divider,
  IconButton,
  Typography,
  List,
  ListItemSecondaryAction,
  Container,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ApproverManualNotify from './ApproverManualNotify';
import {people} from './ApproverNonDOA';
import {RemoveCircle, CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons';

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
                <ListItemText
                  primary={
                    <Typography
                      variant="overline"
                      color="textSecondary"
                      style={{lineHeight: 0.5}}
                    >
                      {option.category}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      style={{lineHeight: 1.4}}
                    >
                      {option.name}
                    </Typography>
                  }
                />
              </React.Fragment>
            )}
            options={people.sort((a, b) => -b.name.localeCompare(a.name))}
            groupBy={(people) => people.type}
            getOptionLabel={(people) => people.type}
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
            {people.map(({name, category, progress, wave, ted, year, type}) => (
              <React.Fragment key={name}>
                <List>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <ApproverManualNotify />
                    <Box display="flex" flexDirection="column" pr={6}>
                      <Typography
                        style={{lineHeight: '1.7'}}
                        variant="overline"
                      >
                        {type} {category}
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
      </Container>
    </>
  );
}
