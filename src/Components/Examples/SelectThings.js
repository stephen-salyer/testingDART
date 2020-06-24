import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles, Popper} from '@material-ui/core';

const Units = [
  {title: 'FOC Dis.'},
  {title: 'FOC Prod.'},
  {title: '%'},
  {title: 'EUR'},
];

const useStyles = makeStyles(() => ({
  formControl: {
    [`& fieldset`]: {
      borderRadius: '0 5px 5px 0',
    },
    marginLeft: '-1px',
  },
}));

const PopperMy = function (props) {
  return <Popper {...props} style={{width: 130}} placement="bottom-start" />;
};

export default function SelectThings() {
  const classes = useStyles();

  return (
    <Autocomplete
      clearOnBlur
      disableClearable
      style={{width: '130px'}}
      className={classes.formControl}
      options={Units}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderOption={(option) => <React.Fragment>{option.title}</React.Fragment>}
      PopperComponent={PopperMy}
      renderInput={(params) => (
        <TextField {...params} label="Rate" variant="outlined" />
      )}
    />
  );
}
