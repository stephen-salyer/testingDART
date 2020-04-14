import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Operations() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-02-18T21:11:54')
  );

  const [selectedDate2] = React.useState(new Date('2021-01-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date2) => {
    setSelectedDate(date2);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel id="demo-simple-select-outlined-label">
              Reason For Strategic Intent
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Reason For Strategic Intent"
              defaultValue={30}
            >
              <MenuItem value={10}>Select an option</MenuItem>
              <MenuItem value={20}>Advocacy / Brand Image</MenuItem>
              <MenuItem value={30}>Cash Flow</MenuItem>
              <MenuItem value={40}>Cross Selling</MenuItem>
              <MenuItem value={50}>Freedom to operate</MenuItem>
              <MenuItem value={60}>Inventory Management</MenuItem>
              <MenuItem value={70}>Inventory Protection</MenuItem>
              <MenuItem value={80}>Loyalty / Retention</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="Communication Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="Communication Date"
              value={selectedDate2}
              onChange={handleDateChange2}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </div>
  );
}
