import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import OperationsPayeeAutoComplete from './OperationsPayeeAutoComplete';

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
        <Grid item xs={12} md={4}>
          <OperationsPayeeAutoComplete />
        </Grid>
        <Grid item xs={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="Start Communication Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="End Communication Date"
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
